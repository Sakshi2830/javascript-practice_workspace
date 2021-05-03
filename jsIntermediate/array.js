var countries = ["India","USA","Japan","Vietnam"]

var states = ["UP","Rajasthan","Assam","Punjab"]

console.log(countries.length);

console.log(states[0]);
states[0] = "ujjain"


console.log(states)// o/p =>  ['ujjain', 'Rajasthan', 'Assam', 'Punjab' ]

console.log(countries.concat(states));
// o/p =>[
/*  'India', 'USA',
  'Japan', 'Vietnam',
  'UP',    'Rajasthan',
  'Assam', 'Punjab'
]*/

console.log(states.indexOf("Rajasthan"))

countries.push("China");
console.log(countries); // o/p => [ 'India', 'USA', 'Japan', 'Vietnam', 'China' ]

countries.pop();
console.log(countries);// o/p => [ 'India', 'USA', 'Japan', 'Vietnam' ]



// PART - 2...........................
var isEven = (element) =>{
    return element % 2 == 0;
};
console.log(isEven(3)); //o/p => false


var result = ['2', '4', '6', '8'].every((e) => (e % 2 === 0));
console.log(result);
// o/p => true


//fill and filter method in Array.......................


var testArray = [2,3,4,5,6,7,8,9,22];
console.log(testArray.fill("empty"))//fill every value with empty keyword..

console.log("updated value=> " +  testArray.fill("empty", 3,7));
//o/p => updated value=> 2,3,4,empty,empty,empty,empty,9,22

const myNum = [23,45,67,89,21,54,87];

const result = myNum.filter((num) => num > 54);

console.log(result);
// o/p => [ 67, 89, 87 ]
