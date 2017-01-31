"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Friend = (function () {
    function Friend(firstName) {
        this.firstName = firstName;
    }
    return Friend;
}());
exports.Friend = Friend;
var Developer = (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super.apply(this, arguments) || this;
    }
    return Developer;
}(Friend));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Developer;
