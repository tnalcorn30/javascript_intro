// For .. in Loop
/*
legend:
    keyword = 'for'
    variable = sometemp word you use to refer to the current item
    collection = some collection you want to go through ex...Array or Obj or String 

<keyword>(<variable> in <collection>){
    // Do something
}
*/
let person = {
    name: "Justin",
    age: 28
}
// A look ahead
//console.log(person.name)
//console.log(person["name"])

for(let property in person){
    //console.log(property)
    console.log(person[property]) // A good use of a for in loop
}

let randomNums = [2, 3, 6, 8, 15, 22, 34, 42]
for(let rand in randomNums){
    //console.log(rand)
    if(rand % 2 === 0){
    console.log(randomNums[rand])
    }
}

let fullName = "Tiffany Alcorn"
for (let letterId in fullName){
    //console.log(letterId)
    console.log(fullName[letterId])
}

/*
This does the same thing!
for(let i = 0; i < fullName.length; i++){
    console.log(myName[i])
}

*/