class Friend {
    constructor(public firstName: string,
        public lastName: string,
        public isDeveloper: boolean) { }
}

let friend = new Friend("Thomas", "Huber", true);

// let surname = friend.firstName;
// let isDev = friend.isDeveloper;

// 1. destructure into new named variables
let {lastName: surname, isDeveloper: isDev} = friend;

console.log(surname);
console.log(isDev);

// 2. destructure into variables that are named like the properties
let {lastName, isDeveloper} = friend;

console.log(lastName);
console.log(isDeveloper);

// 3. destructure directly from a return value - a common approach
function loadFriend(): Friend {
    return new Friend("Julia", "Huber", false);
}

let {firstName} = loadFriend();
console.log(firstName);

// 4. destructure an array
let numbers: number[] = [1, 2, 3, 4];

let [first, second] = numbers;

console.log(first);
console.log(second);