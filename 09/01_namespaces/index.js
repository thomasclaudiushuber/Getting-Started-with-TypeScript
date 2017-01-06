var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Friends;
(function (Friends) {
    var Friend = (function () {
        function Friend(firstName) {
            this.firstName = firstName;
        }
        return Friend;
    }());
    Friends.Friend = Friend;
    var Developer = (function (_super) {
        __extends(Developer, _super);
        function Developer() {
            return _super.apply(this, arguments) || this;
        }
        return Developer;
    }(Friend));
    Friends.Developer = Developer;
})(Friends || (Friends = {}));
/// <reference path="./friends.ts" />
var f = new Friends.Developer("Thomas");
console.log(f.firstName);
