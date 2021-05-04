var myStates = [
    "Rajasthan",
    "Up",
    "Delhi",
    1947,
    "Assam",
    "Tamil Nadu",
    "Maharastra"
]
//--------------FOR LOOP---------------
for (let i = 0; i < myStates.length; i++) {

    if (typeof myStates[i] !=="string") {
        continue
    }
    console.log(myStates[i]);
}


// ---------------WHILE LOOP-------------
let i=0;
while (i < myStates.length) {
    console.log(myStates[i]);
    i++;
    
}

//-------------DO WHILE--------------
let i=0;
 do{
    console.log(myStates[i]);
    i++;
    
}while (i < myStates.length)