var myStr = "I am a \"double quoted\" string inside \"double quotes\".";   /*Escaping Literal Quotes in StringsPassed*/

var myStr = "This is the start. " + "This is the end.";  /*Concatenating Strings with Plus Operator*/ 
console.log(myStr); 

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; /*Escape Sequences in Strings*/

var myStr = "This is the first sentence. "  /*Concatenating Strings with the Plus Equals Operator*/
myStr += "This is the second sentence."
console.log(myStr);

var myName="Egor";
var myStr="My name is "+myName+" and I am well!"; /*Constructing Strings with Variables*/
console.log(myStr)

var someAdjective="Cool";
var myStr = "Learning to code is "; /*Appending Variables to Strings*/
myStr += someAdjective;

var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;    /*Find the Length of a String*/
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";
// Only change code below this line.
lastNameLength = lastName.length;
console.log(lastNameLength)