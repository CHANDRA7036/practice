"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var foo = new person_1.Person();
foo.firstName = "Test";
foo.lastName = "LastName";
console.log(foo);
var Array = [1, 2, 3, 4, 5, 6];
console.log(_.reverse(Array));