class Friend {
    static friendCounter: number = 0;

    constructor() {
        Friend.friendCounter++;
    }
}

new Friend();
new Friend();
new Friend();
console.log(Friend.friendCounter); // Logs 3