let friend = { firstName: "Thomas", lastName: "Huber" };
for (let propKey in friend) {
    console.log(`${propKey}: ${friend[propKey]}`);
}
