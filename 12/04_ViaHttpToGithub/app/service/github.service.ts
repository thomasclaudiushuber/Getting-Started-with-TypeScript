import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

export interface GithubRepo {
    name: string;
    language: string;
}

@Injectable()
export class GithubService {
    private readonly usersUrl: string = "https://api.github.com/users/";
    constructor(private http: Http) { }
    loadGithubRepos(userName: string) {
        return this.http.get(this.usersUrl + userName + '/repos')
            .map(res => res.json() as GithubRepo[]);
    }
}