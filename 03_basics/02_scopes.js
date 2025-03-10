
var c = 300;
let a = 300;
if(true){
    let a = 10;
const b = 20;
// var c = 30;
console.log("INNER:",a);
}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);

// nested scope

function one(){
    const username = "Deepankar"

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    // two();
}

one();

// ---------------------------------------------

if(true){
    const username = "deepankar";
    if(username === "deepankar"){
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// -=================-----------------------intresting
console.log(addone(4));
function addone(num){
    return num + 1;

}

// console.log(addone(5));

// console.log(addtwo(1));

const addtwo = function(num){
    return num +2
}

// console.log(addtwo(1));
