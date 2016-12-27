function append(text, appendix) {
    if (typeof appendix === "number") {
        return text + Array(appendix).join(" ");
    }
    if (typeof appendix === "string") {
        return text + appendix;
    }
    throw new Error("appendix must be string or number");
}
console.log(append("Thomas", " Claudius ") + "Huber");
console.log(append("Thomas", 10) + "Huber");
append("Thomas", true); // Runtime-error, as boolean is passed in
