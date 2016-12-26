function onButtonClick() 
{
    // Grab the input and span element by id
    let input = document.getElementById("firstNameInput");
    let span = document.getElementById("output");

    // read the value from the input element
    let firstName = (input as HTMLInputElement).value;

    // assign the message to the span-element’s innerText-property
    span.innerText = `Welcome ${ firstName }, how are you?`;
}
