//Create an appliction with following roles..
//admin - gets full access
//subadmin - gets access to create/delete contents
//testprep - gets access to create/delete prepared tests
//user - gets access to consume content
  
var user = "prep";

switch (user) {
    case "admin":
        console.log("gets full access");
        break;
    case "subadmin":
        console.log("gets access to create/delete contents");
        break;    
    case "testprep":
        console.log("gets access to create/delete prepared tests");
        break;
    case "user":
        console.log("gets access to consume content");
        break;
    default:
        console.log("trial user");
        break;
}