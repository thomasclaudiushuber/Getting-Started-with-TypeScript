function getNumber() {
    var x;
    return x; // x is undefined
}
getNumber().toString(); // Runtime-error: toString not
// available on undefined
