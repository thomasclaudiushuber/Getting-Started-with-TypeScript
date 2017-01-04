let firstnames: string[] = ["Julia", "Anna", "Thomas"];

for (let firstname of firstnames) {
    console.log(firstname);
}

for (let index in firstnames) {
    console.log(`${index} - ${firstnames[index]}`);
}