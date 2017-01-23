class Friend {
    constructor(public firstName: string) { }
}
export let FRIENDS: Friend[] = [
    new Friend("Sara"),
    new Friend("Anna"),
    new Friend("Thomas")];

export function printFriend(friend: Friend) {
    console.log(friend.firstName);
}