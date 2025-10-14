//Primitive
//7 types : string, number,boolean , null , undefined, Symbol, BigInt


//refernece (non primitive)
//array, objects, functions

//arrays objects function

const hero = ["superman", "batman", "antman"]

let myObj ={
  name : "Sarthak",
  age : "19"
}

const myFunction = function(){
  console.log("hlo");
}

// console.log(typeof myFunction);



//+++++++++++++++++++++++++++++++++++++++

//stack (primitive), heaps (non primitive)
let myname = "sarthak"

let anotherName = myname;
anotherName = "lisha"

console.log(myname);
console.log(anotherName);

let user1 = {
  email : "abs@gmial.com",
  upiId: "abc@yxl"
}

let user2 = user1;

user2.email = "sjsj@gmail.com"

console.log(user1.email);
console.log(user2.email);