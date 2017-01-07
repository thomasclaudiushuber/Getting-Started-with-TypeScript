System.register([], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var Friend, Developer, Skateboarder;
    return {
        setters: [],
        execute: function () {
            Friend = (function () {
                function Friend(firstName) {
                    this.firstName = firstName;
                }
                return Friend;
            }());
            Developer = (function (_super) {
                __extends(Developer, _super);
                function Developer() {
                    return _super.apply(this, arguments) || this;
                }
                return Developer;
            }(Friend));
            exports_1("Developer", Developer);
            Skateboarder = (function (_super) {
                __extends(Skateboarder, _super);
                function Skateboarder() {
                    return _super.apply(this, arguments) || this;
                }
                Skateboarder.prototype.makeKickflip = function () {
                    console.log(this.firstName + " made a kickflip");
                };
                return Skateboarder;
            }(Friend));
            exports_1("Skateboarder", Skateboarder);
        }
    };
});
