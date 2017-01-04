var Friend = (function () {
    function Friend() {
    }
    Object.defineProperty(Friend.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Friend;
}());
var friend = new Friend();
friend.firstName = "Thomas";
console.log(friend.firstName);
