import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{userName}}</h1>
    <div>
      <label>username: </label>
      <input type="text" [(ngModel)]="userName"/>
    </div>
  `
})
export class AppComponent {
  userName:string="Thomas";
}
