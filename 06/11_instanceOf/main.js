var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Friend = (function () {
    // Default value
    function Friend(firstName) {
        this.firstName = firstName;
    }
    return Friend;
}());
var Developer = (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super.apply(this, arguments) || this;
    }
    return Developer;
}(Friend));
var ExcelGuru = (function (_super) {
    __extends(ExcelGuru, _super);
    function ExcelGuru() {
        return _super.apply(this, arguments) || this;
    }
    return ExcelGuru;
}(Friend));
var friend = new Developer("Thomas");
if (friend instanceof Developer) {
    console.log("Yeah, it's a dev");
    // Note that knowsTypeScript-property get's available
    // without type assertion
    console.log("Knows TypeScript: " + friend.knowsTypeScript);
}
