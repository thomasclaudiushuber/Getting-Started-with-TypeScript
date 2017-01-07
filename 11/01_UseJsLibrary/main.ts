interface Friend {
    firstName: string;
}
declare function printFirstName(friend: Friend);

let friend = { firstName: "Thomas" };
printFirstName(friend);