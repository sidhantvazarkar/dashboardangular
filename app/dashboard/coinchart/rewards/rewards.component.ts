import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RewardsService } from './rewards.service';
import { ReferComponent } from '../../../components/refer/refer.component';
import { BuyPageComponent } from '../../../components/buy-page/buy-page.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent {
  rewards: any[];

  constructor(
    private dialog: MatDialog,
    private rewardsService: RewardsService,
    private router: Router
  ) {
    this.rewards = this.rewardsService.getRewards();
  }

  checkReward(index: number, event: Event): void {
    event.preventDefault();
    if (index === 0) {
      this.dialog.open(ReferComponent);
    } else {
      this.dialog.open(BuyPageComponent);
    }
    this.rewardsService.checkReward(index);
  }

  allChecked(): boolean {
    return this.rewardsService.allChecked();
  }

  handleButtonClick(): void {
    if (this.allChecked()) {
      this.router.navigate(['/suprise']);
    } else {
      alert('Complete all tasks');
    }
  }
}


