const user = {
    username: "Deepankar",
    price: 789,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        // console.log(this);
        
        
    }
}

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this);           //in browser object there is global object which is called as window object



// ------------------------------------------------------

// function chai(){
//     let username = 'Deepankar';
//     console.log(this.username);
// }

// chai();

// --------------------------------------------------------


// const chai = function(){
//     let username = 'Deepankar';
//     console.log(this.username);
// }

// chai();

// --------------------------------------------------------

// const chai = () =>{
//     let username = 'Deepankar';
//     console.log(this.username);
// }

// chai();

// --------------------------------------------------------

// const addtwo =(num1,num2) =>{
//     return num1+num2;
// }
// const addtwo =(num1,num2) => num1+num2;          //if {} is used return must use  //if () is used no need to write return
// const addtwo =(num1,num2) => (num1+num2);
const addtwo =(num1,num2) => ({username:"Deepankar"});

console.log(addtwo(4,1));










// const myArray = [2,5,6,7];

// myArray.forEach(function(){})
