import { Component ,OnInit ,OnDestroy} from '@angular/core';
import { AiTipsService } from './ai-tips.service';
import { AiTip } from './ai-tips.model';
import { Subscription, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ai-tips',
  templateUrl: './ai-tips.component.html',
  styleUrl: './ai-tips.component.css'
})

export class AiTipsComponent implements OnInit, OnDestroy {
  tips: AiTip[] = [];
  displayedTips: AiTip[] = [];
  private tipsSubscription: Subscription;
  private refreshInterval = 5000; // Refresh every 5 seconds

  constructor(private aiTipsService: AiTipsService) { }

  ngOnInit(): void {
    this.fetchTips();
    this.startRefreshingTips();
  }

  ngOnDestroy(): void {
    if (this.tipsSubscription) {
      this.tipsSubscription.unsubscribe();
    }
  }

  fetchTips(): void {
    this.aiTipsService.getTips().subscribe(tips => {
      this.tips = tips;
      this.getRandomTips();
    });
  }

  getRandomTips(): void {
    const shuffled = this.tips.sort(() => 0.5 - Math.random());
    this.displayedTips = shuffled.slice(0, 2);
  }

  startRefreshingTips(): void {
    this.tipsSubscription = interval(this.refreshInterval)
      .pipe(switchMap(() => this.aiTipsService.getTips()))
      .subscribe(tips => {
        this.tips = tips;
        this.getRandomTips();
      });
  }
}
