function getFullName(firstName) {
    var moreNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        moreNames[_i - 1] = arguments[_i];
    }
    return firstName + " " + moreNames.join(" ");
}
console.log(getFullName("Thomas"));
console.log(getFullName("Thomas", "Huber"));
console.log(getFullName("Thomas", "Claudius", "Huber"));
console.log(getFullName("Thomas", "Claudius", "Huber", "Developer"));
var additionalNames = ["Claudius", "Huber", "Developer"];
console.log(getFullName.apply(void 0, ["Thomas"].concat(additionalNames)));
