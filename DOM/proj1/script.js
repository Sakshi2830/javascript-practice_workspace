var counter = document.querySelector(".counter");
var follower = document.querySelector(".followers");

let count = 1
// let count2 = 0
setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerText = count;
        
    }
//  setInterval(() => {
        
//     if (count2 < 895) {
//         count++;
//         counter.innerText = count;
//     }
// }, 10000);
    
},1);

setTimeout(() => {
    
    follower.innerText = "followers on instagram"
},6400)

