let isVisible: any = true;

console.log(`type: ${typeof isVisible} value: ${isVisible}`);

isVisible = "hidden";
console.log(`type: ${typeof isVisible} value: ${isVisible}`);

isVisible = 1;
console.log(`type: ${typeof isVisible} value: ${isVisible}`);


// isVisible.someNonExistingFunction(); // Runtime error, but no compile-time error
