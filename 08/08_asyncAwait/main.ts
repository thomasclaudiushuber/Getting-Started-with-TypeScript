function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    await delay(1000);
    console.log("This");

    await delay(1000);
    console.log("is ");

    await delay(1000);
    console.log("ASYNC!");
}

main();