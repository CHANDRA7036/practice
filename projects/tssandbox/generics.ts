function echo<T>(arg:T):T{
    return arg;

}
var myStr=echo(1);


class Persons{
         firstName:string;
        lastName:string;

    constructor(firstName:string,lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;      
    }
getFullName(){
            return this.firstName+" "+this.lastName;
        }
    }

    class Admin extends Persons{

    }
    class Manager extends Persons{

    }
    let admin=new Admin('a','a');
    let manager=new Manager('a','a');

    function personEcho<T extends Persons>(persons:T):T{
        return persons;

    }
    var foo=personEcho(admin);
    var bar=personEcho(manager);