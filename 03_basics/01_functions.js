function saymyname(){
    console.log("D");
console.log("E");
console.log("E");
console.log("P");
console.log("A");
console.log("N");
console.log("K");
console.log("A");
console.log("R");
}

// saymyname();

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
    
// }

// addTwoNumbers(5,3);

// const result = addTwoNumbers(5,3);
// console.log("Result :", result);
// -----------------------------------------
// function addTwoNumbers(num1,num2){
//        let result = num1 + num2;
//     //    console.log(result);
//        return result;
// }

// const result = addTwoNumbers(9,3);
// console.log("Result :", result);

// -----------------------------------------
// function addTwoNumbers(num1,num2){
//        return num1+num2;
// }

// const result = addTwoNumbers(9,3);
// console.log("Result :", result);

// -----------------------------------------

// function loginUserMessage(username){
//     // if(username === undefined){
//     //     console.log("Please enter username");
//     //     return
        
//     // }
//     if(!username){
//         console.log("Please enter username");
//         return
        
//     }
//     return `${username} just logged in.`
// }

// console.log(loginUserMessage("Deepankar"));
// console.log(loginUserMessage());

// ----------------------------------------------
function loginUserMessage(username='sam'){
   
    if(!username){
        console.log("Please enter username");
        return
        
    }
    return `${username} just logged in.`
}

console.log(loginUserMessage());
console.log(loginUserMessage("Deepankar"));
