var Friend = (function () {
    function Friend(firstName, lastName, isDeveloper) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.isDeveloper = isDeveloper;
    }
    return Friend;
}());
var friend = new Friend("Thomas", "Huber", true);
// let surname = friend.firstName;
// let isDev = friend.isDeveloper;
// 1. destructure into new named variables
var surname = friend.lastName, isDev = friend.isDeveloper;
console.log(surname);
console.log(isDev);
// 2. destructure into variables that are named like the properties
var lastName = friend.lastName, isDeveloper = friend.isDeveloper;
console.log(lastName);
console.log(isDeveloper);
// 3. destructure directly from a return value - a common approach
function loadFriend() {
    return new Friend("Julia", "Huber", false);
}
var firstName = loadFriend().firstName;
console.log(firstName);
// 4. destructure an array
var numbers = [1, 2, 3, 4];
var first = numbers[0], second = numbers[1];
console.log(first);
console.log(second);
