class Friend {
    // Default value
    constructor(public firstName: string) { }
}
class Developer extends Friend {
    knowsTypeScript: boolean;
}
class ExcelGuru extends Friend { }

let friend: Friend = new Developer("Thomas");

if (friend instanceof Developer) {
    console.log("Yeah, it's a dev");

    // Note that knowsTypeScript-property get's available
    // without type assertion
    console.log("Knows TypeScript: " + friend.knowsTypeScript)
}
