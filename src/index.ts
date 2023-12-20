// console.log("hello!")

const name = "Test",
    age = '28',
    gender = "male"

const sayHi = (name: string, age: number|string, gender: string): string =>
 `Hello ${name} ${age} ${gender}` 

console.log(sayHi(name, age, gender));

export {}