/*
# OBJECTS

Objects are lists of values similar to arrays, except values are identified by k
eys instead of integers.

Here is an example:

var foodPreferences = {
  pizza: 'yum',
  salad: 'gross'
}

## The challenge:

Create a file named objects.js.

In that file, define a variable named pizza like this:

var pizza = {
  toppings: ['cheese', 'sauce', 'pepperoni'],
  crust: 'deep dish',
  serves: 2
}

Use console.log() to print the pizza object to the terminal.

Check to see if your program is correct by running this command:

javascripting verify objects.js
*/
(function(){
	'use strict';
	
	var pizza = {
		toppings: ['cheese', 'sauce', 'pepperoni'],
		crust: 'deep dish',
		serves: 2
	};
	
	console.log(pizza);
})();