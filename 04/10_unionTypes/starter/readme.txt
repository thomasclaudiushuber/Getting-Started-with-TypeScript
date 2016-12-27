1. Change the any-parameter of the function to a union type string|number

2. Now you can get rid of the line that throws an error, because you always have a string or number

3. Look at the compile-time error that you get when you call the function with a boolean instead of a number