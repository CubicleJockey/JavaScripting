/*
# OBJECT PROPERTIES

You can access and manipulate object properties -- the keys and values that an o
bject contains -- using a method very similar to arrays.

Here's an example using square brackets:

var example = {
  pizza: 'yummy'
};

console.log(example['pizza']);

The above code will print the string 'yummy' to the terminal.

Alternately, you can use dot notation to get identical results:

example.pizza;

example['pizza'];

The two lines of code above will both return yummy.

## The challenge:

Create a file named objectProperties.js.

In that file, define a variable named food like this:

var food = {
  types: 'only pizza'
};

Use console.log() to print the types property of the food object to the terminal
.

Check to see if your program is correct by running this command:

javascripting verify objectProperties.js

*/
(function(){
	'use strict';
	
	var food = {
		types: 'only pizza'
	};
	
	console.log(food.types);
	
})();