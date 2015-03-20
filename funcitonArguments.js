/*
# FUNCTION ARGUMENTS

A function can be declared to receive any number of arguments. Arguments can be
from any type. An argument could be a string, a number, an array, an object and
even another function.

Here is an example:

function example (firstArg, secondArg) {
  console.log(firstArg, secondArg);
}

We can call that function with two arguments like this:

example('hello', 'world');

The above example will print to the terminal hello world.

## The challenge:

Create a file named functionArguments.js.

In that file, define a function named math that takes three arguments. It's impo
rtant for you to understand that arguments names are only used to reference them
.

Name each argument as you like.

The function math should multiply the second and third arguments, then add the f
irst argument to the outcome of the multiplication and return the value obtained
.

After that, inside the parentheses of console.log(), call the math() function wi
th the number 53 as first argument, the number 61 as second and the number 67 as
 third argument.

Check to see if your program is correct by running this command:

javascripting verify functionArguments.js
*/
(function(){
	'use strict';
	
	console.log(math(53, 61, 67));
	
	/*helper functions*/
	function math(first, second, third){
		return (second * third) + first;
	}
})();