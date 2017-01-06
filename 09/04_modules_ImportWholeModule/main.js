System.register(["./friends.js"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var friends_js_1, dev;
    return {
        setters: [
            function (friends_js_1_1) {
                friends_js_1 = friends_js_1_1;
            }
        ],
        execute: function () {
            dev = new friends_js_1.Developer("Thomas");
            dev.knowsTypeScript = true;
        }
    };
});
