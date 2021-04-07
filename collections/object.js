// Objects

/*
syntax:
    {
        ki: v1,
        k2: v2
    }

keys can be in "" but don't have to be if they are valid var names, i.e they don't start with a "number" or have invalid characters, or has spaces

*/
let obj1 = {
    name: "Tiffany"
}
let obj2 = {
    "name": "Critter"
}
// There are two ways to get things out of objects "Dot" notation and "square bracket" notation

console.log(obj1.name)
console.log(obj1["name"])

let car = {
    make: "Jeep",
    model: "Wrangler",
    year: 2020,
    miles: 10_000,
    owners: ["Amy", "Josh"]
}
console.log(car.miles)
console.log(car["miles"])
console.log(car.owners[0]) // obj can hold more than just primitive types

let person = {
    fName: "Tiffany",
    lName: "Alcorn",
    age: 31,
    fullName: function(){
        return `${this.fName} ${this.lName}`
    },
    greet: function(greetWord){
        return `${greetWord}, ${this.fName}`

    }
}
console.log(person.fName)
console.log(person.fullName())
console.log(person.greet("Hello"))

// This demo shows we can add new keys through assignment
let builderObj = {} // An empty obj
console.log(builderObj)
builderObj.name = "Tiffany"
builderObj["age"] = 31
builderObj.greet = function(greetWord){
    return `${greetWord}, ${this.name}`
}
console.log(builderObj.greet("Hello"))

// A look ahead STACKS and QUEUES <= we can build these with objects
// Stacks are LIFO (last in first out)
// Queues are FIFO (first in first out)

// A look ahead at "Classes", special type of way to build an obj
class Dog{
    constructor(breed, age){
        this.breed = breed
        this.age = age
    }
    bark = function(){
        return 'The ' + this.breed + ' Barks!'
    }
}

let fido = new Dog("lab", 25)
let dogs = [new Dog("lab", 25), new Dog("corgi", 25)]
dogs.forEach(dog => console.log(dog.bark()))
console.log(fido.breed)