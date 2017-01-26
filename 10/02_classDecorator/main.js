"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
require("reflect-metadata");
var componentDataKey = "componentData";
function Component(data) {
    return function Component(target) {
        Reflect.defineMetadata(componentDataKey, data, target);
    };
}
var Friend = (function () {
    function Friend() {
    }
    return Friend;
}());
Friend = __decorate([
    Component({
        firstName: "Thomas",
        lastName: "Huber"
    })
], Friend);
var compData = Reflect.getMetadata(componentDataKey, Friend);
console.log(compData.firstName); // Logs "Thomas"
console.log(compData.lastName); // Logs "Huber"
