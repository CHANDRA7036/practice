var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.walk = function (distance) {
        console.log("Hi, my name is " + this.name + " and i am walking " + distance + "meaters");
    };
    return Animal;
}());
// let myAnimal=new Animal("dave");
// myAnimal.walk(10);
// class Snake{
//     constructor(theName:string) {
//         super(theName);   
//     }
//     walk(distance:number){
//         console.log("snakes dont really walk");        
//     }
// }
var fn = function () { return 'response'; };
var a;
var b;
var c;
a = 10;
b = true;
c = 'hello';
var myarray;
myarray = [];
myarray = [1, 1, 2, 3, 5];
myarray.push(1);
//tuple
var myArr;
myArr = [1, true];
myArr = [188, false];
function sum(x, y) {
    return x + y;
}
var Addition = sum(10, 20);
