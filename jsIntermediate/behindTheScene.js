sayHello();

function sayHello(){
    console.log("this gonna return value")
}  

//here what we did we fisrt call the funtion later define it,but it still show output
//this is because in javascript it takes the context and declare it globally and we can use it anywhere

//foe eg:
var myName="sakshi";

if(myName===myName){
    console.log("this is a true value");
}//here the condition is true