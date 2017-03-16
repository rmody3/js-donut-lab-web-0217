//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
var guests
var donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
var guest = prompt("Please enter your the number of guest")
var donuts = prompt("Please enter your the number of donuts")
//use parseInt to convert the users answer from a string to an integer.
parseInt(guests, 10)
parseInt(donuts, 10)
//write a conditional to check if there are enough donuts

if (guests < donuts){
  console.warn("Not Enough Donuts")
}
else {
  console.warn("You have enough donuts")
}
  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
