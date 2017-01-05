abstract class Friend {
    constructor(public firstName: string) { }

    abstract sayHello(): void;
}

class Developer extends Friend {
    knowsTypeScript: boolean;

    sayHello() {
        console.log(`Hi, I'm ${this.firstName}`)
    }
}

var dev = new Developer("Thomas");
dev.sayHello();