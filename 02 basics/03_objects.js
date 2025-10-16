//Singletopn
//object create

//object literals
const mySym = Symbol("key1")

const JsUser = {
  name : "sarthak",
  "full name" : "sarthak kumar",
  age : 19,
  [mySym] : "mykey1",
  mySym : "mykey1",  
  location : "Delhi",
  gmail : "abc@gmail.com",
  isLoggedIn : false,
  lastLogin : ["monady" , "saturday"]
}
// console.log(JsUser.gmail);
// console.log(JsUser["gmail"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.gmail = "cfd@gmail.com"

// Object.freeze(JsUser)
// console.log(JsUser);

JsUser.greeting = function(){
  console.log("hlo");
}

JsUser.greeting2 = function(){
  console.log(`hlo , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

