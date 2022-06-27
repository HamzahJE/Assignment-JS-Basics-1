
// Create a new file called password.js. Write a program that does the following:

// Create a variable called password and set it’s value to a string of your choice.

let password="hello12313243"

// Write a conditional statement that checks if the password meets the following constraints:

// At least 10 characters long

// Contains at least one letter and one number

// If the password meets the constraint, console log a success message.

// If the password fails the constraint, console log a failure message.
if(password.includes([0-9]) && password.includes([a-zA-z]) && password.length>=10){ 
    console.log("SUCCESS, Password meets the minimum requirments ")
}else{
    console.log("ERROR, Password does not meet the requirments ")
}


// Test out your conditional by changing the value of your password variable and running your file!