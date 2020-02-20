class User {
    constructor(firstname, lastname, credit) {
        this.firstname = firstname;

        this.lastname = lastname;
        this.credit = credit;

    }
    getFullName() {
        let FullName = `${this.firstname} ${this.lastname} this is full name`;
        return FullName;


    }
    editName(newName) {
        const myName = newName.split(" ")
        this.firstname = myName[0];
        this.lastname = myName[1];

    }

}
class Teacher extends User {
    constructor(firstname, lastname, credit, persentage) {
        super(firstname, lastname, credit);
        this.persentage = persentage;
    }
    getFullName() {
        let FullName = `${this.firstname} ${this.lastname} this is full name and I got ${this.persentage}`;
        return FullName;
    }

}

const john = new Teacher('John', 'Anderson', 34, 80);
//console.log(john);
console.log(john.getFullName());








// const sammy = new User();
// console.log(sammy);

// const sammy = new User('sammy', 'kanda', 23);
// console.log(sammy);