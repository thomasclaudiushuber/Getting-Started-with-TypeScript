"use strict";
var Friend = (function () {
    function Friend(firstName) {
        this.firstName = firstName;
    }
    return Friend;
}());
exports.FRIENDS = [
    new Friend("Sara"),
    new Friend("Anna"),
    new Friend("Thomas")
];
function printFriend(friend) {
    console.log(friend.firstName);
}
exports.printFriend = printFriend;
