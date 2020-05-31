//Declaring String Variables 
var myFirstName = 'Mark';
var myLastName = 'Lusala';

//Escaping literals in  strings
//using bacslash
 var myStr = "i am a\"double quoted\" string inside \"double qoutes\"";
console.log(myStr)

//using single quotes for the string 
 var myStr = 'i am a "double quoted" string inside "double qoutes"';
console.log(myStr)

//concatinating strings with + opearator
var str = "i come first" + " i come second";
console.log(str);

//concatinating strings with += opearator
var str = "i come first";
str += " i come second";
console.log(str);

//concatinating strings with += opearator
var name = "mark"
var str = "My name is "+ name + " and i am a javascript guru";
console.log(str);

//Appending variables to strings 
var name = "worthwhile";
var str ="Learning to code is ";
console.log( str +=name);

//Finding the length of a string
var firstNameLength = 0;
var firstName = "Marklusala";
firstNameLength = firstName.length;
console.log(firstNameLength);

//Bracket notation to find the first character in a string 
var firstName = "Marklusala";
firstLetterofFirstName = firstName[0];
console.log(firstLetterofFirstName);

//string immutability
var str = "jello world";
str = "Hello World";
console.log(str); 

// brackets notation to find nth character of a string 
var firstNamelength = 0;
var firstName = "Marklusala";
var firstNamelength = firstName[firstName.length -1];
console.log(firstNamelength);

// bracket notation to find nth -to- last character in a string 
var firstNamelength = 0;
var firstName = "Marklusala";
var firstNamelength = firstName[firstName.length -1];// change the index inside the brackets.
console.log(firstNamelength);