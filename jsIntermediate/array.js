var countries = ["India","USA","Japan","Vietnam"]

var states = ["UP","Rajasthan","Assam","Punjab"]

console.log(countries.length);

console.log(states[0]);
states[0] = "ujjain"


console.log(states)

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