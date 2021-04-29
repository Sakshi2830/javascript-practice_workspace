//TODO: Truthy and falsy values
// null
// undefined
// ""
// NaN
//These values are called falsy values apart from all these everything is truthy{for eg}=>
var user="";
var num = "2"
if (user) {
    console.log("Condition is true"); 
}
if (2==num) {//here javascript is a tricky language it assumes a lot of thing "so by using double equals it work a little loosely and give output"
    console.log("condition is working");    
}
 if (2===user) {
     console.log("now condition will not work");//but if we work tripple equal it didnt allow javascript to assume anything and it checks everything
 }