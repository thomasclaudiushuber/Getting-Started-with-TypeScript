function onButtonClick() {
    // Grab the two elements by id
    var input = document.getElementById("username");
    var span = document.getElementById("output");
    // read from the input element
    var name = input.value;
    // create the message
    var message = "Welcome " + name + ", how are you?";
    // write the message to the span-element
    span.innerText = message;
}
