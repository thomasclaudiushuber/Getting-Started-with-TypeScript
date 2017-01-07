import { Http } from '@angular/http';
import { Injectable } from '@angular/core'
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    constructor(private http: Http) { }
    loadGithubRepos(githubUser: string) {
        return this.http.get(
            `https://api.github.com/users/${githubUser}/repos`)
            .map(res => res.json() as GithubRepo[]);
    }
}
export interface GithubRepo {
    name: string;
    language: string;
}