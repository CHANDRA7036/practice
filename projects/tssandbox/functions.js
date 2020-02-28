function getSum(num1, num2) {
    return num1 + num2;
}
// console.log(getSum(20,5));
var mySum = function (num1, num2) {
    if (typeof num1 == "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 == "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
//console.log(mySum('10','20'));
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
}
console.log(getName('john'));
function myVoid() {
    return;
}
