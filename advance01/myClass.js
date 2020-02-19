class User {
    constructor(firstname, middleName, lastname, credit) {
        this.firstname = firstname;
        this.middleName = middleName;
        this.lastname = lastname;
        this.credit = credit;

    }
    getFullName() {
        let FullName = `${this.firstname} ${this.middleName}${this.lastname} this is full name`
        return FullName;


    }
    editName(newName) {
        const myName = newName.split(" ")
        this.firstname = myName[0];
        this.lastname = myName[1];

    }
    getMiddleName(middleName) {
        const myName = middleName.split(" ");
        this.firstname = myName[0];
        this.middleName = myname[1]
        this.lastname = myName[2]
    }

}

const john = new User('John', 'new', 'Anderson', 34);
//console.log(john);
console.log(john.getFullName());
john.editName('chandrasekhar reddy');
console.log(john);

console.log(john.getFullName());





// const sammy = new User();
// console.log(sammy);

// const sammy = new User('sammy', 'kanda', 23);
// console.log(sammy);