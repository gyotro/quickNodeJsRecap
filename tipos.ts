let cuenta: String = "cuentaGio"
const cuentaNum: number = 1234
const cuentaActiva: boolean = false

var cuentasArr: any[] = [1, 2, "test", false]

console.log(cuentasArr)

// interesante es poder poner a una variable tanto tipo de array como de variable normal

var item: number[]|number

item = [1,2,3,4]
console.log(item)
item = 50
console.log(item)