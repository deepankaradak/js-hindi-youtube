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
