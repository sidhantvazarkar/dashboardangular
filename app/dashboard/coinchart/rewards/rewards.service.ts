import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RewardsService {
  private rewards = [
    { description: 'Invite a friend using your referral code', bonus: '+10.00 USDT', checked: false },
    { description: 'Get your first coin', bonus: '50% bonus to your next deposit', checked: false },
    { description: 'Get your first coin', bonus: '50% bonus to your next deposit', checked: false }
  ];

  getRewards() {
    return this.rewards;
  }

  checkReward(index: number) {
    this.rewards[index].checked = true;
  }

  allChecked() {
    return this.rewards.every(reward => reward.checked);
  }
}
