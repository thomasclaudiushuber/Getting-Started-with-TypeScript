import { GithubService, GithubRepo } from './service/github.service';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div style="margin:20px">
  <h1>Select a github user</h1>
  <ul>
    <li *ngFor="let user of githubUsers" [class.isSelected]="selectedUser==user" style="cursor:pointer"
        (click)="onUserClick(user)">
          {{user}}
    </li>
    </ul>
    <div *ngIf="selectedUser">
      <p>Repos of "{{selectedUser}}"</p>
      <table>
        <tr>
          <th>Name</th>
          <th>Language</th>
        </tr>
        <tr *ngFor="let repo of githubRepos">
          <td>{{repo.name}}</td>
          <td>{{repo.language}}</td>
        </tr>
      </table>
    </div>
    </div>
  `,
  styles: [`.isSelected{font-weight:bold;}`]
})
export class AppComponent {

  constructor(private githubService: GithubService) { }

  githubUsers = ["thomasclaudiushuber", "microsoft", "angular"];

  onUserClick(user: string) {
    this.selectedUser = user;
    this.githubRepos = [];
    this.githubService.loadGithubRepos(user)
      .subscribe(result => this.githubRepos = result);

  }

  selectedUser: string;

  githubRepos: GithubRepo[];
}
