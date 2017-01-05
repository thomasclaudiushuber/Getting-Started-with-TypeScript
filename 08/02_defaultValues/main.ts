function getFullName( firstName: string = "Julia",lastName?: string) {
    if (lastName)
        return `${firstName} ${lastName}`;
    else
        return firstName;
}

console.log(getFullName("Thomas", "Huber"));
console.log(getFullName("Thomas"));
console.log(getFullName()); // OK, logs "Julia"
