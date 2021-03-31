// Single line comment
// console.log("This is text, and a string");
/*
*/

// This is what is normal to use
str_a = "Justin's This is a double quote string"
str_b = '"Justin" This is a single quote string'


// console.log('This is \nnew');
// Use this to add data into a string
str_c = `This is a backtick quote string`
// ^ This is a template string

// Just mentioning this, we will talk more later
str_d = String(5)


let f_name = 'Justin'
let l_name = 'Ahmann'

// New operator: unary operator that gives back type info
// console.log(typeof f_name)
// console.log(typeof "What is this?")


let full_name = f_name + ' ' + l_name
let template_full = `${f_name} ${2 + 2}`
let concat_full = f_name.concat(l_name)
// console.log(concat_full)

let multi_line1 = 'this is a long string ' + 
'and I want it on many lines'
let multi_line2 = 'this is also a long string \
and I want it on many lines'

// console.log(multi_line1)
// console.log(multi_line2)

//console.log(full_name)
//consol.elog(template_full)

demo_str = "This is a demo"
let result = demo_str.slice(3)

// console.log(result)

let indexed_str = "Hello World!"
console.log(indexed_str)
console.log(indexed_str[0])
console.log(indexed_str[6])