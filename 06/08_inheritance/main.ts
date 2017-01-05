class Friend {
    constructor(public firstName: string) { }
}

class Developer extends Friend {
    knowsTypeScript: boolean;
}


let dev: Developer = new Developer("Thomas");
dev.knowsTypeScript = true;

console.log(dev.firstName);
console.log(dev.knowsTypeScript);

// Custom constructor
class Developer2 extends Friend {
    constructor(firstName: string, public knowsTypeScript: boolean) {
        super(firstName);
    }
}

var dev2:Developer2 = new Developer2("Thomas",true);