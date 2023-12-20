interface Human {
    name: string,
    age: number,
    gender: string
}

const person = {
    name: "Test",
    age: 28,
    gender: "male"
}


const sayHi = (person: Human): string =>
 `Hello ${person.name} ${person.age} ${person.gender}` 

console.log(sayHi(person));

export {}