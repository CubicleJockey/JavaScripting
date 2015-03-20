/*
# LOOPING THROUGH ARRAYS

For this challenge we will use a for loop to access and manipulate a list of val
ues in an array.

Accessing array values can be done using an integer.

Each item in an array is identified by a number, starting at 0.

So in this array hi is identified by the number 1:

var greetings = ['hello', 'hi', 'good morning'];

It can be accessed like this:

greetings[1];

So inside a for loop we would use the i variable inside the square brackets inst
ead of directly using an integer.

## The challenge:

Create a file named loopingThroughArrays.js.

In that file, define a variable named pets that references this array:

['cat', 'dog', 'rat'];

Create a for loop that changes each string in the array so that they are plural.


You will use a statement like this inside the for loop:

pets[i] = pets[i] + 's';

After the for loop, use console.log() to print the pets array to the terminal.

Check to see if your program is correct by running this command:

javascripting verify loopingThroughArrays.js
*/
(function(){
	'use strict';
	
	var pets = ['cat', 'dog', 'rat'];
	for(var i = 0; i < pets.length; i++){
		pets[i] = pets[i].concat('s');
	}
	console.log(pets);
})();