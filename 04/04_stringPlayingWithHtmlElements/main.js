function onButtonClick() {
    // Grab the input and span element by id
    var input = document.getElementById("firstNameInput");
    var span = document.getElementById("output");
    // read the value from the input element
    var firstName = input.value;
    // assign the message to the span-element’s innerText-property
    span.innerText = "Welcome " + firstName + ", how are you?";
}
