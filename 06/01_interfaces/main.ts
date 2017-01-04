interface Friend {
    firstName: string;
    lastName?: string;
}

function getFullName(friend: Friend): string {
    let fullName = friend.firstName;
    if (friend.lastName) {
        fullName += " " + friend.lastName;
    }
    return fullName;
}

console.log(getFullName({ firstName: "Thomas", lastName: "Huber" }));

console.log(getFullName({ firstName: "Thomas" }));

console.log(getFullName({})); // Error: firstName is missing