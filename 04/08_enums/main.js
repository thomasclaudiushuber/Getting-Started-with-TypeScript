var Dock;
(function (Dock) {
    Dock[Dock["left"] = 0] = "left";
    Dock[Dock["top"] = 1] = "top";
    Dock[Dock["right"] = 2] = "right";
    Dock[Dock["bottom"] = 3] = "bottom";
})(Dock || (Dock = {}));
var dock = Dock.top;
console.log(typeof dock);
console.log(dock);
console.log(Dock[dock]);
