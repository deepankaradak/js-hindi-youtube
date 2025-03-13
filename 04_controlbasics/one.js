// if

// const isUserLoggedIn = true;
// const temprature =41;

// if(2 != 3){
//     console.log("Executed");
// }

// if(temprature<50){
//     console.log("less than 50");
    
// }
// if(temprature === 41){
//     console.log("less than 50");
    
// }else{
//     console.log("temprature is greater than 50")
// }

// <,>,<=,>=,==,===,!=,
// ------------------------------------------------------------

// const score = 200

// if (score > 100){
//     const power = "fly";
//     console.log(`User power: ${power}`);
    
// }

// console.log(`User power: ${power}`);

// ------------------------------------------------------------
// short hand notation 
// const balance  = 1000

// if(balance>500)console.log("test");        //inplisit scope

// ------------------------------------------------------------
// nesting 

// if(balance < 500){
//     console.log(`less than`);
    
// }else if(balance < 750){
// console.log("less than 750");

// }else if(balance<900){
//     console.log(`less than 900`);
    
// }else{
//     console.log(`less than 1200`);
    
// }

// ------------------------------------------------------------
// double check

const isUserLoggedIn = true;
const debitcard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(isUserLoggedIn && debitcard && 2==2){
    console.log("Allow to buy cource");
    
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}


