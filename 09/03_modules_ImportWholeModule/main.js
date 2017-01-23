"use strict";
var Friends = require("./friends");
var dev = new Friends.Developer("Julia");
dev.knowsTypeScript = true;
var boarder = new Friends.Skateboarder("Thomas");
boarder.makeKickflip();
