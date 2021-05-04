/*
Classes are a template for creating objects.
They encapsulate data with code to work on that data.
*/


/* syntax
__________________________________________________________________
Class declarations
__________________________________________________________________

class <some class name>{
    constructor(<things needed to build the class>, <..>, ...){
        <this>
    }
}
_________________________________________________________________
Class expression
_________________________________________________________________

let <class name> = class {
    constructor(<things needed to build the class>, <..>, ...){
        <this>
    }
}
*/

// class definitions are not hoisted

// How to build a class and store data using the constructor
class Animal {
    constructor(name, isCute){
        this.name = name
        this.isCute = isCute
    }
}

let dog = new Animal("lab", true) // this makes an instance of the class
let bat = new Animal("bat", false)

bat.isCute = true // you still can update the data in the class instance

console.log(dog, bat)
console.log(dog.name)
console.log(dog.isCute)

let animalNames = ["great white shark", "zebra", "sugar glider"]
let animalArr = animalNames.map(animal => new Animal(animal, undefined))
console.log(animalArr)

/*
let animalArr = animalNames.map(animal => {
    return {
        name : animal,
        isCute: undefined
    }
})
console.log(animalArr)
*/

class Point {
    constructor(x, y){
        this.x = x
        this.y = y
    }
    location() {
        return [this.x, this.y]
    }
}

let p1 = new Point(5, 6)
console.log(p1)
console.log(p1.location())

class Student {
    constructor(name, grade){
        this.name = name
        this.grade = grade
    }
    greet(){
        return `Hello my name is ${this.name}`
    }
}

let aaron = new Student("aaron", 12)
console.log(aaron.greet())
aaron.name = "ryan"
console.log(aaron.greet())

let newStudent = (name, grade) => {
    return {
        name: name,
        grade: grade
    }
}

let justin = newStudent("justin", 12)
let justin2 = new Student("justin", 12)

//console.log(justin.greet())
console.log(justin2.greet())


// roughly 7:35 pm at time of recording, recheck this area of the video

// What is this? the instance context
let someStudent1 = new Student("demo", 10) // this => someStudent
let someStudent2 = new Student("demo again", 10) // this => someStudent2
someStudent1.name = "not demo"
someStudent2.name

console.log(someStudent1, someStudent2)