// ES5 Global Constants:
var PI = 3.14;
PI = 42; // stop me from doing this!

// ES2015 Global Constants
const pi = 3.14;
const pi = 42; // ES2015 Will not redefiine here, and VS code says cannot redeclare block-scoped variable 'pi'

// What is the difference between var and let:

// var is the old way of doing things and is able to be redefined, redeclared, mutated and is not block-scoped. let is the "new" ES2015 way of doing things and is the standard in the modern day and age. Can be reassigned and mutated but not redeclared.

// What is the difference between var and const?

// var, has all the properties stated above, whereas const is unable to be redefined or redeclared, but can still be mutated. const is the other modern alternative to using var, and is usually the best way to go unless the variable needs to be redefined.

// What is the difference between let and const?

// let is a more flexible way of defining a variable as it can be redefined as well as mutated, while const is more rigid making it more useful for storing variables that cant accidentally be redefined.
