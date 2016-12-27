function onKeyUp(event) {
    let input = document.getElementById("myInput");
    let firstname = input.value;
    let output = document.getElementById("myOutput");
    output.innerText = `Hi ${firstname}, happy coding! :-)`;
}
