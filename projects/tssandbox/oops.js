// class Person{
//      firstName:string;
//     lastName:string;
//     greet(){
//         console.log("Hey there");
//     }
// }
//     class Programmers extends Person{
//         greet(){
//             console.log("hello world");
//         }
//     }
//     var aProgrammer=new Programmers();
//     aProgrammer.greet();
//     constructor(firstName:string,lastName:string){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
//     getFullName(){
//         return this.firstName+" "+this.lastName;
//     }
// }
// var aPerson:Persons=new Persons("chandra","sekhar");
// // aPerson.firstName= "viany";
// // aPerson.lastName="dokka" ;
// console.log(aPerson.getFullName());
// console.log(aPerson.firstName);
// console.log(aPerson.lastName);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var aPersons = new Person('vinay');
console.log(aPersons.name);
