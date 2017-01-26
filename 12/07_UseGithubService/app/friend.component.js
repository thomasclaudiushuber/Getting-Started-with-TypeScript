"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var github_service_1 = require("./github.service");
var core_1 = require("@angular/core");
var FriendComponent = (function () {
    function FriendComponent(githubService) {
        this.githubService = githubService;
    }
    FriendComponent.prototype.ngOnChanges = function () {
        this.loadGithubRepos();
    };
    FriendComponent.prototype.loadGithubRepos = function () {
        var _this = this;
        return this.githubService.loadGithubRepos(this.friend.github)
            .subscribe(function (res) { return _this.githubRepos = res; });
    };
    return FriendComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FriendComponent.prototype, "friend", void 0);
FriendComponent = __decorate([
    core_1.Component({
        selector: 'my-friend',
        template: "\n    <div>\n        <label>name:</label>\n        <input type=\"text\" [(ngModel)]=\"friend.name\">\n    </div>\n    <div>\n        <label>github:</label>\n        <span>{{friend.github}}</span>\n    </div>\n    <h2>Github repos</h2>\n    <table>\n        <tr>\n          <th>Name</th>\n          <th>Language</th>\n        </tr>\n        <tr *ngFor=\"let repo of githubRepos\">\n          <td>{{repo.name}}</td>\n          <td>{{repo.language}}</td>\n        </tr>\n      </table>"
    }),
    __metadata("design:paramtypes", [github_service_1.GithubService])
], FriendComponent);
exports.FriendComponent = FriendComponent;
//# sourceMappingURL=friend.component.js.map