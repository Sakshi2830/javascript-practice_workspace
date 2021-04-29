function sayHello(name) {
console.log(`hello everyone, i am Sakshi`);
console.log(`hello everyone, I am ${name}`);  
}

sayHello("sammy");//this is we call calling a function
sayHello;//this is we call referencing a function

function Namaste() {
    return("this we all hello in India")
}

Namaste();//if we are returning anything this won't print any value it just return the funtion 

//for printing there is two way:-
var greeting = Namaste();//by declaring it in a variable
console.log(greeting);//print the variable
console.log(Namaste());//console loging the function
//there is difference in console logging and returning the funtion.........