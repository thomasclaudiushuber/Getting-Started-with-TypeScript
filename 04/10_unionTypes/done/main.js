function append(text, appendix) {
    if (typeof appendix === "number") {
        return text + Array(appendix).join(" ");
    }
    if (typeof appendix === "string") {
        return text + appendix;
    }
}
console.log(append("Thomas", " Claudius ") + "Huber");
console.log(append("Thomas", 10) + "Huber");
append("Thomas", true); // Compile-time error
