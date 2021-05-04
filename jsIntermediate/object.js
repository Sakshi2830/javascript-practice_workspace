var iphone12 = {
    screen: "6.1-inch",
    camera: "12MP Ultra Wide camera",
    chip: "A14 Bionic chip",
    Water_resistant: "Rated IP68",
    Charging: "Compatible with MagSafe",
    Front_Camera: "12MP TrueDepth camera"
}

console.log(iphone12.Water_resistant);
console.log(iphone12); //o/p =>

// {
//     chip: 'A14 Bionic chip',
//     Water_resistant: 'Rated IP68',
//     Charging: 'Compatible with MagSafe',
//     Front_Camera: '12MP TrueDepth camera'
//   }

console.table(iphone12);
/* o/p =>
    ┌─────────────────┬───────────────────────────┐
    │     (index)     │          Values           │
    ├─────────────────┼───────────────────────────┤
    │     screen      │        '6.1-inch'         │
    │     camera      │ '12MP Ultra Wide camera'  │
    │      chip       │     'A14 Bionic chip'     │
    │ Water_resistant │       'Rated IP68'        │
    │    Charging     │ 'Compatible with MagSafe' │
    │  Front_Camera   │  '12MP TrueDepth camera'  │
    └─────────────────┴───────────────────────────┘*/




//--------------MORE IN OBJECT-------------
var user = {
    firstName: "Sammy",
    lastName: "Warren",
    role: "Admin",
    facebookSignedIn: 32,
    courseList: [],
    buyCourse: function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function(){
        return `${this.firstName} has enrolled in ${this.courseList.length} courses`;
    }

}

console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React js course");
user.buyCourse("Angular course")
console.log(user.getCourseCount());

//o/p =>
// Sammy
// Sammy has enrolled in 0 courses
// Sammy has enrolled in 2 courses