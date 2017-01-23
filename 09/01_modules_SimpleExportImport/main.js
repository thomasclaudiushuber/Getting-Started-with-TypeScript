"use strict";
var friends_1 = require("./friends");
var dev = new friends_1.Developer("Thomas");
dev.knowsTypeScript = true;
console.log(dev.firstName);
console.log("knows TypeScript: " + dev.knowsTypeScript);
