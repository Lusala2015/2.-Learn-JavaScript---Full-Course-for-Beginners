// Data Types and Variables 
 /*1. undefined -- something that has not been defined
 2. null --means nothing
 3. boolean---- true or false
 4. string -- statements
 5.symbol--- an immutable primitive value that is unique
 6. number--- means a number
 7.object-- can store a lot of different key value pairs 
 Variables -- allows a computer to store data 
 To declare a variable use a var key word
 i.e var myName = "Mar";*/

  //Difference between var, let and const
  var //=used throughout  your whole program
  //let = only be used within the scope of where you decleared that 
  //const = a variable that can never be changed.//if you try to change it you get an error.

//Uninitialized varaibles
 var a = 10;
 var b = 10;
  c = "I am a ";
  
  a = a + 2;
  b = b + 5;
  c = c + " String";
  
  console.log(a);
  console.log(b);
  console.log(c);
 
 //Case sensitivity in variables
 var myName = "Mark";//...................1
 var myNAme = "Mark";//....................2//1 and 2 are not same variables despite the letters being same the case sensitivity applies there
  