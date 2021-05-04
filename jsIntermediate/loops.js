var myStates = [
    "Rajasthan",
    "Up",
    "Delhi",
    1947,
    "Assam",
    "Tamil Nadu",
    "Maharastra"
]

for (let i = 0; i < myStates.length; i++) {

    if (typeof myStates[i] !=="string") {
        continue
    }
    console.log(myStates[i]);
}