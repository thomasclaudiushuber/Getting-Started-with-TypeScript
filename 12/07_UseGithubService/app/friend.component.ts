import { GithubService, GithubRepo } from './github.service';
import { Friend } from './friend';
import { Component, Input, OnChanges } from '@angular/core';


@Component({
    selector: 'my-friend',
    template: `
    <div>
        <label>name:</label>
        <input type="text" [(ngModel)]="friend.name">
    </div>
    <div>
        <label>github:</label>
        <span>{{friend.github}}</span>
    </div>
    <h2>GitHub repos</h2>
    <table>
        <tr>
          <th>Name</th>
          <th>Language</th>
        </tr>
        <tr *ngFor="let repo of githubRepos">
          <td>{{repo.name}}</td>
          <td>{{repo.language}}</td>
        </tr>
      </table>`
})
export class FriendComponent implements OnChanges {
    @Input()
    friend: Friend;

    constructor(private githubService: GithubService) { }

    ngOnChanges() {
        this.loadGithubRepos();
    }

    loadGithubRepos() {
        return this.githubService.loadGithubRepos(this.friend.github)
            .subscribe(res => this.githubRepos = res);
    }

    githubRepos: GithubRepo[]
}