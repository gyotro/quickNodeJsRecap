let cuenta: String = "cuentaGio"
const cuentaNum: number = 1234
const cuentaActiva: boolean = false

var cuentasArr: any[] = [1, 2, "test", false]

console.log(cuentasArr)

// interesante es poder poner a una variable tanto tipo de array como de variable normal

var item: number[] | number

item = [1, 2, 3, 4]
console.log(item)
item = 50
console.log(item)

// puedo crear tmb un Array con varios tipos

var miArray: Array<string | number>

miArray = [1, "string"]

console.log(miArray)

let myNull: null = null;
let myVoid: void = undefined;

console.log(myNull)
console.log(myVoid)

// arraow functions

let sum = (a: number | string, b: number): number | string => {
    if (typeof (a) === 'string')
        a = parseFloat(a)
    return a + b
}

console.log(sum('1', 3))

let concat = (a: string, b?: string): string => {
    if (b == undefined)
        return `Me llamo ${a}`
    return `Me llamo ${a} ${b}`
}

console.log(concat('Gio', "Tro"))
console.log(concat('Gio'))

let myVoidFunc = (): void => { console.log('test void') }

myVoidFunc()

// Clases y Herencias

class User {
    private name: string
    private email: string
    private age: number

    constructor(name: string, email: string, age: number | string) {
        this.name = name
        this.email = email
        this.age = this.convertAge(age)
    }

    private convertAge = (a: number | string): number => {
        if (typeof (a) == 'string') a = parseInt(a)
        return a
    }

    public getAge(): number {return this.age}
    public getEmail(): string {return this.email}
    public getName(): string {return this.name}

}

class Memmber extends User {
    private id: number

    constructor(id: number, name: string, email: string, age: number | string) {
        super(name, email, age)
        this.id = id
    }

    public getId(): number {return this.id}
    public getAge(): number { return super.getAge() } // no es obligatorio escribirlo, es implicitamente ugual que a super.getAge()
}

let newMember = new Memmber(3, "Gio", "Gio@gmail.com", 35)

console.log(`New member created with id: ${newMember.getId()}, name: ${newMember.getName()}, email: ${newMember.getEmail()}, age: ${newMember.getAge()}`)

let newUser = new User("Gio", "Gio@gmail.com", '30')

console.log(`New user created with name: ${newUser.getName()}, email: ${newUser.getEmail()}, age: ${newUser.getAge()}`)