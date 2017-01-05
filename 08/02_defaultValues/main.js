function getFullName(firstName, lastName) {
    if (firstName === void 0) { firstName = "Julia"; }
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
console.log(getFullName("Thomas", "Huber"));
console.log(getFullName("Thomas"));
console.log(getFullName()); // OK, logs "Julia"
