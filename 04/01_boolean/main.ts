// Implicitly typed variable
let isVisible1 = true;
isVisible1 = "hidden"; // ERROR: string not assignable to type boolean

// Declaration and assignment split: Without type
let isVisible2;
isVisible2 = true;
isVisible2 = "hidden"; // WORKS, as type cannot be infered

// Declaration and assignment split: With type
let isVisible3: boolean;
isVisible3 = true;
isVisible3 = "hidden"; // ERROR: string not assignable to type boolean






