// Primitive

// 7 types: String, Number, BigInt, Boolean, Undefined, Null, Symbol

const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false;
const outsideTemp = null
let userEmail;


const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 124565484545121545451515454545455n;



// Reference (Non-primitive)

//Array, Object, Function

const names = ["Deepankar","Rahul","Rohit"];
const myObj ={
    name: "Deepankar",
    age:23,
    Pass:true,
}


const myNewFunction = function(){
    console.log("Hello world");
}

myNewFunction();

// notes for datatypes value fixed

// undefined   "undefined"
// Null  "object"
// Boolean "boolean"
// Number "number"
// BigInt "bigint"
// String "string"
// Object (native and does not implement [[Call]])        "object"
// Object (native or Host and does implement [[Call]])    "function"
// Object (host and does not implement [[Call]])           Implementation-defined except may not be "undefined", "Null", "Boolean", "Number", "bigint", "String", or "symbol"



