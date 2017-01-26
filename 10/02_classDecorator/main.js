var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var dataByType = [];
function Component(data) {
    return function Component(target) {
        dataByType.push({ type: target.name, compData: data });
    };
}
var Friend = (function () {
    function Friend() {
    }
    return Friend;
}());
Friend = __decorate([
    Component({
        creator: "Thomas"
    })
], Friend);
console.log(dataByType[0].type);
console.log(dataByType[0].compData.creator);
