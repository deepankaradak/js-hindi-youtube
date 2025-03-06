// Constructor method

// const tinderUser = new Object()              //Singleton Object
// returns empty {}

// const tinderUser = {}                        // non - singleton Object
// returns empty {}

const tinderUser = {}

tinderUser.id = "01245"
tinderUser.name = "Deepankar"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Deepankar",
            lastname: "Adak"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1:"a",2:"b"}
const obj2 = {2:"a",3:"b"}
const obj4 = {4:"a",5:"b"}

// const obj3 = {obj1, obj2}
// const  obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1,...obj2}
// console.log(obj3);


const users = [
    {id:1,
        name:"Instagram"
    },
    {id:2,
        name:"Instagram"
    },
    {id:3,
        name:"Instagram"
    },
    {id:4,
        name:"Instagram"
    },

]

users[1].name;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename : "Js in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}


// course.courseInstructor
const {courseInstructor: instructor} = course;
// console.log(courseInstructor);
console.log(instructor);
 

// destructuring below example

// const navbar = ({company}) => {

// }

// navbar(company = "hitesh");


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price" : "free"
// }

// [
//     {},
//     {},
//     {},
//     {}
// ]


