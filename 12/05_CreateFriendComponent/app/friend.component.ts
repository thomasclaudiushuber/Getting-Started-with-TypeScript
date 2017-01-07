import { Friend } from './friend';
import { Component,Input } from '@angular/core';

@Component({
    selector: 'my-friend',
    template:`
    <div>
        <label>name:</label>
        <input type="text" [(ngModel)]="friend.name">
    </div>
    <div>
        <label>github:</label>
        <span>{{friend.github}}</span>
    </div>`
})
export class FriendComponent {
    @Input()
    friend:Friend;
}