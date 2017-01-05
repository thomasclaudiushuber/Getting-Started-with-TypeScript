class Friend {
    // Default value
    constructor(public firstName: string = "Julia") { }
}

let friend1 = new Friend("Thomas");
let friend2 = new Friend(); // Works because there's a default value defined
console.log(friend2.firstName); // Logs "Julia"

