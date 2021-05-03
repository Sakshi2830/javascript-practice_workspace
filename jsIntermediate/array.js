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