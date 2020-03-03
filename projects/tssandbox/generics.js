var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function echo(arg) {
    return arg;
}
var myStr = echo(1);
var Persons = /** @class */ (function () {
    function Persons(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Persons.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Persons;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(Persons));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(Persons));
var admin = new Admin('a', 'a');
var manager = new Manager('a', 'a');
function personEcho(persons) {
    return persons;
}
var foo = personEcho(admin);
