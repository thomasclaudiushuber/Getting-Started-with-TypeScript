System.register(["./node_modules/reflect-metadata/Reflect"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    function Component(data) {
        return function Component(target) {
            Reflect.defineMetadata(componentDataKey, data, target);
        };
    }
    var componentDataKey, Friend, compData;
    return {
        setters: [
            function (_1) {
            }
        ],
        execute: function () {
            componentDataKey = "CompKey";
            Friend = (function () {
                function Friend() {
                }
                return Friend;
            }());
            Friend = __decorate([
                Component({
                    creator: "Thomas"
                })
            ], Friend);
            compData = Reflect.getMetadata(componentDataKey, Friend);
            console.log(compData.creator);
        }
    };
});
