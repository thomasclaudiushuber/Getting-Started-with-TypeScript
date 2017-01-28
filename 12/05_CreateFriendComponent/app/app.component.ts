import { Friend, FRIENDLIST } from './friend';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Select a friend</h1>
    <ul>
      <li *ngFor="let friend of friends" style="cursor:pointer"
         [class.isSelected]="friend==selectedFriend"
          (click)="onFriendSelect(friend)">
            {{friend.name}}
      </li>
    </ul>
    <div *ngIf="selectedFriend != null">
      <my-friend [friend]="selectedFriend"></my-friend>
    </div>
  `,
  styles: [`.isSelected{font-weight:bold;}`]
})
export class AppComponent {
  friends:Friend[] = FRIENDLIST;

  onFriendSelect(friend:Friend) {
    this.selectedFriend = friend;
  }

  selectedFriend: Friend;
}
