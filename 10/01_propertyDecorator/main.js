var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logAccess(target, propertyKey) {
    // grab the value
    var value = this[propertyKey];
    // define a setter
    var setter = function (newValue) {
        value = newValue;
        console.log("set " + propertyKey + ": " + value);
    };
    // define a getter
    var getter = function () {
        console.log("get " + propertyKey + ": " + value);
        return value;
    };
    // replace the property
    if (delete this[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}
var Friend = (function () {
    function Friend() {
    }
    return Friend;
}());
__decorate([
    logAccess
], Friend.prototype, "name", void 0);
var friend = new Friend();
friend.name = "Thomas";
friend.name = "Julia";
var theName = friend.name;
