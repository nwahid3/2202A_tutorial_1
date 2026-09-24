// Modify function so it takes an input age and outputs the age that 
// a person born in that year will turn in 2026.
// Example: if birthyear is 2006, the value stored in age (and then printed!) should be 20  
// Inputs: Birth year will be of Number type and will be a positive integer (not greater than 2026), 
// or a similar String of digits such as "1991" 
// (but not text like "nineteen ninety one").
function printAgeIn2026(birthYear){
    let age = 2026-birthYear; //age is the difference of current year and birth year.

    // Don't modify these lines.
    console.log("This person will turn " + age + " in 2026.")
    return age;
}

// Modify the function so that it prints the age plus 10. 
// Inputs: age may be of Number type and will be a positive integer, or a similar String of digits such as "1991"
// (but not text like "nineteen ninety one").
// Hint: Consider how implicit type conversion works with + and strings.
function printAgeIn10Years(age){
    let newAge = Number(age)+10; //takes the numerical value of age and adds 10 to it.

    // Don't modify these lines.
    console.log("This person will be " + newAge + " in 10 years.")
    return newAge;
}

// Change the function so adultBool contains True is age is at least 18.
// The logic for the print statement is done for you. We will see this syntax later.
// Input type: String or Number, representing an integer.
function checkIfAdult(age){
    let isAdult = Number(age)>=18; //takes the numerical value of age and checks if it is greater than or equal to 18.

    // Leave this part. We haven't learned this syntax yet, but
    // this statement will print "The person is not an adult." if isAdult is False,
    // and "The person is an Adult" if isAdult is true.
    console.log("The person is " + (isAdult ? "" : "not")  + " adult.")
    return isAdult;
}

// Check if the input is of Number type with value 0. 
// Hint: Make sure to NOT accept the string "0", undefined, null.
function checkIfZero(number){
    // Change the following line.
    let isZero = number === 0; //checks if the input is strictly equal to 0.

    // Leave this part. We haven't learned this syntax yet, but
    // this statement will print "The input is not zero." if isZero is False,
    // and "The input is zero" if isZero is true.
    console.log("The input is " + (isZero ? "" : "not")  + " 0.")
    return isZero;
}

// Check whether the first input is a digit string equivalent in value to the second input
// Example: if the inputs are "9" and 9, isEquivalent should be true
// Counter-example: if the inputs are "nine" and 9, isEquivalent should be false
// Input: The first input is guaranteed to be a non-empty String, the second an Number (and will not be NaN) 
function checkIfEquivalent(string, number){
    let isEquivalent = Number(string) === number; //checks if the numerical value of the string is strictly equal to the number.

    // Leave this part. We haven't learned this syntax yet, but
    // this statement will print "The string is not equivalent to the number." if isEquivalent is False,
    // "The string is equivalent to the number." if isEquivalent is True,
    console.log("The string is " + (isEquivalent ? "" : "not")  + " equivalent to the number.")
    return isEquivalent;
}

//The template code prints the notification no matter what.
//Modify the code so that the message notification will only be printed
//if unreadCount is defined, not 0, and not null.
//Inputs: unreadCount is guaranteed to be a (positive, integer) Number, null, or undefined.
//Concept hint: This one requires a single short-circuiting operator.
function unreadAlert(unreadCount){
    //Add to this line.
    unreadCount && console.log("You have " + unreadCount + " messages.") //checks if unreadCount is truthy (not null, undefined, or 0) before printing the message.
}

//The template code prints the notification no matter what.
//Modify the code so that the message notification will only be printed if unreadCount is a Number greater than zero.
//Inputs: unreadCount may be any type. 
//Concept hint: This one requires chained short-circuiting operators, typeof,
//AND a comparison operator.
//Extra hint: Be careful of order for the short-circuiting.
function unreadAlertValidated(unreadCount){
        //Add to this line.
    typeof unreadCount === "number" && unreadCount > 0 && console.log("You have " + unreadCount + " messages.") //checks if unreadCount is a number and greater than 0 before printing the message.
}

//Modify the code so that the message notification will only be printed
//if unreadCount is defined, a Number greater than zero OR a string of digits (e.g., "10","1", but not "one" or "ten") representing a number greater than 0, and not null.
//Inputs: unreadCount may be String, Number, null or undefined. 
//Concept hint: This one requires chained short-circuiting operators,
//AND a comparison operator, and explicit type conversion.
//Extra hint: What result will you get if you convert "one" to a Number?
function unreadAlertStringInput(unreadCount){
    Number(unreadCount) > 0 && console.log("You have " + unreadCount + " messages.") //checks if unreadCount can be converted to a number greater than 0 before printing the message.
}

//Modify the code so that correctedScore will contain "N/A" if the score is
//undefined, or null and the original score (including 0) otherwise.
//Inputs: unreadCount may be a Number, null or undefined. You do not need
//to check if the score is positive or an interger.
//Hint: 0 can be treated the same as other numbers if you use the right
//operator.
function showScore(score){
    //change this line
    let correctedScore = score ?? "N/A"; // checks if score is null or undefined, and assigns "N/A" to correctedScore if it is, otherwise assigns the original score.

    //Leave the print statement for debugging and
    //the return line for the autograder.
    console.log("The score is:" + score)
    return correctedScore;
}

//Modify function so that userOrPlaceholder contains the original username
//if username is a non-empty string or "Mustang" otherwise.
//Input: String (including empty string), or undefined
//Hint: Double-check spelling and capitalization for the autograder.
function printWelcomeMessage(username){
    //change this line
    let userOrPlaceholder = username || "Mustang"; //checks if username is a non-empty string, and assigns it to userOrPlaceholder if it is, otherwise assigns "Mustang".

    //Leave the print statement for debugging and
    //the return line for the autograder.
    console.log("Welcome, " + userOrPlaceholder + "!")
    return userOrPlaceholder;
}