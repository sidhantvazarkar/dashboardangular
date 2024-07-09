import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AiTip } from './ai-tips.model';

@Injectable({
  providedIn: 'root'
})
export class AiTipsService {
  private jsonUrl = 'assets/ai-tips.json';

  constructor(private http: HttpClient) { }

  getTips(): Observable<AiTip[]> {
    return this.http.get<AiTip[]>(this.jsonUrl);
  }
}

