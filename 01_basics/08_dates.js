//Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());

// console.log(typeof myDate);        //Interview question : what is type of date :ANS: Object

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5 , 10);
// let myCreatedDate = new Date("2023-01-14");
// let myCreatedDate = new Date("01-14-2023")

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp =  Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));   //Interview Question


let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time is`

newDate.toLocaleString('default',{
    weekday:"long"
})  // nterlization

