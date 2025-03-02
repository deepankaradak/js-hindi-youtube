//Stack (primitive data types), Heap (objects, functions, arrays [Non-primitive data types])


//stack
let myYoutubeChannelName = "The Tech Module";
let NewYoutubechannelName = myYoutubeChannelName;
NewYoutubechannelName = "Chai aur code";

console.log(myYoutubeChannelName);
console.log(NewYoutubechannelName);


//Heap
let userOne = {
    email: "test@gmail.com",
    id: 1
}

let userTwo = userOne

userTwo.email = "deep@gmail.com";

console.log(userOne);
console.log(userTwo);