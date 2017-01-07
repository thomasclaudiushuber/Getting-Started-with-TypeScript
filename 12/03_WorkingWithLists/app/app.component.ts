import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Select a github user</h1>
    <ul>
      <li *ngFor="let user of githubUsers"
          (click)="onUserClick(user)">
            {{user}}
      </li>
    </ul>
    <div *ngIf="selectedUser">
      <p>Selected user: "{{selectedUser}}"</p>
    </div>
  `,
  styles: [`.isSelected{font-weight:bold;}`]
})
export class AppComponent {
  githubUsers = ["thomasclaudiushuber", "microsoft", "angular"];

  onUserClick(user: string) {
    this.selectedUser = user;
  }

  selectedUser: string;
}
