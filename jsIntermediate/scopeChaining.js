var myName = "Sammy";

console.log("Line no. 3 get icecream from", myName);

sayName();
function sayName(){
    
    var myName = "Miss S";
    
    console.log("Line no. 7 get icecream from", myName);
//this gets its value from its nearest variable ie Miss S
sayNmeTwo();
function sayNmeTwo(){
    console.log("Line no. 12 get icecream from", myName);
}//gets its value from nearest variable ie Miss S
}

//But no one can gets its value the below declared variable......