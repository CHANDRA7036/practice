// interface UserInterface{
//     name:string;
//     email:string;
//     age:number;
//     register();
//     payInvoice();
// }
// class User{
//  name:string;
//  email:string;
//     age:number;
//     constructor(name:string,email:string,age:number){
//         this.name=name;
//         this.email=email;
//         this.age=age;
//         console.log("user:"+this.name);
//     } 
//     register(){
//         console.log(this.name + 'is now registered');       
//     }
//     payInvoice(){
//         console.log(this.name+ 'paide invoice member');
//     }
// }
// class Member extends User{
//     id:number;
//     constructor(id:number,name:string,email:string,age:number){
//         super(name,email,age);
//         this.id=id;
//     }
//     payInvoice(){
//         super.payInvoice();
//     }
// }
// // let john=new User('John Doe','jde@gmail.com',30);
// // // console.log(john.age);
// // john.register();
// let mike: User=new Member(1,'Mike Smith','mikesmith@gmai.com',20);
// mike.payInvoice();
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var stud = new Student();
stud.studCode = 101;
stud.studName = "Joe Root";
console.log(stud.studCode + " " + stud.studName);
