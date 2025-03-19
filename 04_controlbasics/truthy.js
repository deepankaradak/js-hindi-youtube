// const userEmail = "deep@adak.in";
// const userEmail = "";
    // const userEmail = [];

    // if(userEmail){
    //     console.log("we got the user Email");
    // }else{
    //     console.log("there is no email for user");
        
    // }

// note:

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// trythy values 
// "0", 'false', " ", [], {}, function(){}

    // if(userEmail.length === 0){
    //     console.log("Array is empty");
        
    // }

    // const emptyObj = {}

    // if(Object.keys(emptyObj).length === 0){
    //     console.log("object is empty");
        
    // }


// just to know as note

// false == 0
// true

// false == ''
// true

// 0== ''
// true

// -----------------------------------------------

//Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10; 
// val1 = null ?? 10; 
// val1 = undefined ?? 20; 
// val1 = null ?? 5 ?? 20; 

// console.log(val1);

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
