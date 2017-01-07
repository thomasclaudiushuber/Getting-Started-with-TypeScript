import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{userName}}`
})
export class AppComponent {
  userName:string="Thomas";
}
