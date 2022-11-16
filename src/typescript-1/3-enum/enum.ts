//Enum
//cara untuk membatasi nilai variable

enum MyStringEnum {
    A,
    B,
    C,
    D = 'test'
}

let x: MyStringEnum = MyStringEnum.B
console.log(x)