// Objects  [literrals, constructor =>(singleton)]

// object Literals

const mySym = Symbol("Key1");

const JsUser = {
    name : "Deepankar",
    "full name" : "Deepankar Adak",
    [mySym] : "myKey1",
    age : 18,
    location: "Mumbai",
    email: "deepankar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "deepankar@mah.in";
// Object.freeze(JsUser);s
JsUser.email = "test@trg.in";
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);

}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
