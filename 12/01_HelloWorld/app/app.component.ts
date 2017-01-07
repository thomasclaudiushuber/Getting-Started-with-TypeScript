import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}`
})
export class AppComponent {
  name:string="Thomas";
}
