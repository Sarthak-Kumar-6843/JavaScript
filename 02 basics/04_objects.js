// const tinderUser = new Object()    singleton object
const tinderUser = {} //non singleton

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLogged = false

// console.log(tinderUser);

const regularUser = {
  email : "abc@gmail.com",
  fullname : {
    username : {
      firstname : "sarthak",
      lastname : "kumar"
    }
  }
}

// console.log(regularUser.fullname.username.firstname);

const obj1 = {1: "a" , 2:"b"}
const obj2 = {3 : "a" , 4 : "b"}
const obj4 = {5 : "a" , 6 : "b"}

// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

const user = [
  {
    id : 1,
    email : "abc@gmail.com"
  },
  {
    id : 1,
    email : "abc@gmail.com"
  },
  {
    id : 1,
    email : "abc@gmail.com"
  }
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty(`isLogged`));

const course = {
  coursename : "jsHindi",
  price : "999",
  instructor : "abc"
}

const {instructor} = course

console.log(instructor);

/* const navbar = ({company}) => {

}

 navbar(company = "abc")   destructuring
*/

// {
//   "name" : "abc",
//   "coursename" : "js",
//   "price" : "free"
// } json

[
  {},
  {},
  {}
]


