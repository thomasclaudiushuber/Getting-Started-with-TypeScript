function onButtonClick() 
{
    // Grab the two elements by id
    let input = document.getElementById("username") as HTMLInputElement;
    let span = document.getElementById("output");

    // read from the input element
    let name = input.value;

    // create the message
    let message = `Welcome ${name}, how are you?`;

    // write the message to the span-element
    span.innerText = message;
}
