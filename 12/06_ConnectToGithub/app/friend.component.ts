import { Http } from '@angular/http';
import { Friend } from './friend';
import { Component, Input, OnChanges } from '@angular/core';
import 'rxjs/add/operator/map';

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
    <h2>GitHub repos of {{friend.name}}</h2>
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

    constructor(private http: Http) { }

    ngOnChanges() {
        this.loadGithubRepos();
    }

    loadGithubRepos() {
        return this.http.get(
            `https://api.github.com/users/${this.friend.github}/repos`)
            .map(res => res.json() as GithubRepo[])
            .subscribe(res => this.githubRepos = res);
    }

    githubRepos: GithubRepo[]
}
interface GithubRepo {
    name: string;
    language: string;
}