function logAccess(target: Object, propertyKey: string) {
    // grab the value
    let value = this[propertyKey];

    // define a setter
    let setter = (newValue) => {
        value = newValue;
        console.log(`set ${propertyKey}: ${value}`);
    };

    // define a getter
    let getter = () => {
        console.log(`get ${propertyKey}: ${value}`);
        return value;
    };

    // replace the property
    if (delete this[propertyKey]) {
        Object.defineProperty(
            target, propertyKey, {
                get: getter,
                set: setter
            });
    }
}

class Friend {
    @logAccess
    name: string;
}

let friend = new Friend();
friend.name = "Thomas";
friend.name = "Julia";
let theName = friend.name;