// While Loop
/*
legend:
    keyword = while
    1 = some eval or expression that is true or false

<keyword>(<1>){
    // Do something
}
*/

let i = 0;
while(i <= 10){
    console.log(i);
    i++;
}

// This is functionally the same!
for(let x=0; x<=10; x++){
    console.log(x);
}

while(true){
    console.log("Help this loop is always true");
    break; // This ends the infinite loop.  A break in a loop will only break one loop, not two.
}

for(let x=0; x<=10; x++){
    for(let y=0; y<=10; y++){
        console.log(x, y, x * y);
    }
}

let names = ["Justin", "Adam", "Kate", "Jim", "Amy"];
for (let name in names){
    let curName = names[name];
    console.log(curName);
    if (curName == "Kate"){
        break;
    }
}

// Break / Continue

let counter = -1;
while (counter <= 20){
    counter++;
    if (counter % 2 === 1) {
        continue;  // ? What is this
    } 
    console.log(counter);
}

for(let tmp = 100; tmp >= 0; tmp -= 5){
    console.log(tmp);
}

// Count down from 100 by five, stop at 0
let test = 100;
while(test >= 0){
    console.log(test);
    test -= 5;
    if (test < 0){
        break;
    }
}
