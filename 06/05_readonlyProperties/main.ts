class Friend {
    constructor(public readonly firstName: string) { }
}

let friend = new Friend("Thomas");
console.log(friend.firstName); // OK
friend.firstName = "Julia"; // Error, as it is readonly

interface Developer {
    readonly knowsTypeScript: boolean;
}

let dev: Developer = { knowsTypeScript: true };
console.log(dev.knowsTypeScript); // OK
dev.knowsTypeScript = false; // Error, as it is readonly