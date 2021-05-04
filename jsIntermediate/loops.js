var myStates = [
    "Rajasthan",
    "Up",
    "Delhi",
    1947,
    "Assam",
    "Tamil Nadu",
    "Maharastra"
]
//--------------FOR LOOP---------------
for (let i = 0; i < myStates.length; i++) {

    if (typeof myStates[i] !=="string") {
        continue
    }
    console.log(myStates[i]);
}


// ---------------WHILE LOOP-------------
let i=0;
while (i < myStates.length) {
    console.log(myStates[i]);
    i++;
    
}

//-------------DO WHILE--------------
let i=0;
 do{
    console.log(myStates[i]);
    i++;
    
}while (i < myStates.length)


//--------------FOR EACH LOOP-----------


myStates.forEach((s) => (console.log(s)));
//o/p => 
/*Rajasthan
Up   
Delhi
1947 
Assam
Tamil Nadu
Maharastra*/

//-----------------FOR OF AND FOR IN-----------------
var sites = ["youTube", "facebook", "twitter", "instagram"];

for(const n of sites ){
    console.log(n);
}//o/p =>
/*youTube
facebook
twitter
instagram*/

var symbols ={
    yt: "youtube",
    ig: "instagram",
    fb: "facebook",
    com: "commerce"
}

for(const n in symbols){
    // console.log(n);//o/p =>
/*yt
ig 
fb 
com*/
    console.log(`key is: ${n} value is: ${symbols[n]}`);}//o/p => 
/*key is: yt value is: youtube
key is: ig value is: instagram
key is: fb value is: facebook
key is: com value is: commerce*/
