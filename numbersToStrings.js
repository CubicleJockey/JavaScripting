/*
# NUMBER TO STRING

Sometimes you will need to turn a number into a string.

In those instances you will use the .toString() method. Here's an example:

var n = 256;
n = n.toString();

## The challenge:

Create a file named numberToString.js.

In that file define a variable named n that references the number 128;

Call the .toString() method on the n variable.

Use console.log() to print the results of the .toString() method to the terminal
.

Check to see if your program is correct by running this command:

javascripting verify numberToString.js
*/
(function(){
	'use strict';
	
	var n = 128;
	var converted = n.toString();
	console.log(converted);
})();