"use strict";
var friends_1 = require("./friends"); // The  is the default import
var prog = new friends_1.default("Thomas");
prog.knowsTypeScript = true;
console.log(prog.firstName);
console.log("Knows TypeScript: " + prog.knowsTypeScript);
var friend = new friends_1.Friend("Julia");
console.log(friend.firstName);
