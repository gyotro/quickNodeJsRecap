"use strict";
let cuenta = "cuentaGio";
const cuentaNum = 1234;
const cuentaActiva = false;
var cuentasArr = [1, 2, "test", false];
console.log(cuentasArr);
// interesante es poder poner a una variable tanto tipo de array como de variable normal
var item;
item = [1, 2, 3, 4];
console.log(item);
item = 50;
console.log(item);
// puedo crear tmb un Array con varios tipos
var miArray;
miArray = [1, "string"];
console.log(miArray);
let myNull = null;
let myVoid = undefined;
console.log(myNull);
console.log(myVoid);
// arraow functions
let sum = (a, b) => {
    if (typeof (a) === 'string')
        a = parseFloat(a);
    return a + b;
};
console.log(sum('1', 3));
let concat = (a, b) => {
    if (b == undefined)
        return `Me llamo ${a}`;
    return `Me llamo ${a} ${b}`;
};
console.log(concat('Gio', "Tro"));
console.log(concat('Gio'));
let myVoidFunc = () => { console.log('test void'); };
myVoidFunc();
// Clases y Herencias
class User {
    constructor(name, email, age) {
        this.convertAge = (a) => {
            if (typeof (a) == 'string')
                a = parseInt(a);
            return a;
        };
        this.name = name;
        this.email = email;
        this.age = this.convertAge(age);
    }
    getAge() { return this.age; }
    getEmail() { return this.email; }
    getName() { return this.name; }
}
class Memmber extends User {
    constructor(id, name, email, age) {
        super(name, email, age);
        this.id = id;
    }
    getId() { return this.id; }
    getAge() { return super.getAge(); } // no es obligatorio escribirlo, es implicitamente ugual que a super.getAge()
}
let newMember = new Memmber(3, "Gio", "Gio@gmail.com", 35);
console.log(`New member created with id: ${newMember.getId()}, name: ${newMember.getName()}, email: ${newMember.getEmail()}, age: ${newMember.getAge()}`);
let newUser = new User("Gio", "Gio@gmail.com", '30');
console.log(`New user created with name: ${newUser.getName()}, email: ${newUser.getEmail()}, age: ${newUser.getAge()}`);
