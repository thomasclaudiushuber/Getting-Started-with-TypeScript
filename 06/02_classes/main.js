var Friend = (function () {
    function Friend(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Friend.prototype.getFullName = function () {
        var fullName = this.firstName;
        if (this.lastName) {
            fullName += " " + this.lastName;
        }
        return fullName;
    };
    return Friend;
}());
var friend1 = new Friend("Thomas", "Huber");
var friend2 = new Friend("Julia");
console.log(friend1.getFullName());
console.log(friend2.getFullName());
