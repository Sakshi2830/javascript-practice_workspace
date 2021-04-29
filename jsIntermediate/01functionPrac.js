//Define a function that can answer the role of a user
//Create an appliction with following roles..
//admin - gets full access
//subadmin - gets access to create/delete contents
//testprep - gets access to create/delete prepared tests
//user - gets access to consume content
//other trial user

//Input : getUserRole(name,role)

// function getUserRole(name,role) {//this is the old way of declaring


  var getUserRole= function(name,role){  //this is can be used in javascript we can declare a funtion inside a variable
switch (role) {
    case "admin":
        return `${name} is admin gets full access`
       //break statement is of no use bcoz code didn't reach to break
    case "subadmin":
        return `${name} is subadmin gets access to create/delete contents`
          
    case "testprep":
        return `${name} is a testprep gets access to create/delete prepared tests`
       
    case "user":
        return `${name} is a testprep gets access to consume content`
       
    default:
        return `${name} is a trial user`
        
}
}
var getRole = getUserRole("sammy","subadmin")
console.log(getRole);
    
