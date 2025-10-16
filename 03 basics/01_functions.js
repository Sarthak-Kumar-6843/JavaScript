function sayMyName() {
  console.log("a");
  console.log("b");
  console.log("c");
  console.log("d");
}
// sayMyName()

// function add(n1,n2){
//   console.log(n1 + n2);
// }

function add(n1,n2){
  // let result = n1 + n2
  // return result

  return n1 + n2
}

const result = add(3,4)
// console.log("Result: ",result);

function login(username = "sam") {
  if(!username) {
    console.log("pls enter username");
    return
  }

  return `${username} just logged in`
}

// // console.log(login("sarthak"));
// console.log(login());

function calCartprice(...n1) {//rest operator/spread operator
  return n1
}
// console.log(calCartprice(2));

// console.log(calCartprice(200,500,6000,3434));

const user = {
  name : "abc",
  price : 199
}

function handleObj(anyObj){
  console.log(`username is ${anyObj.name} and price is ${anyObj.price}`);
}

// handleObj(user)

handleObj({
  name : "sam",
  price : 399
}) 

const newArr = [200,400,600,800,1000]

function returnValue(getArr) {
  return getArr[1]
}
console.log(returnValue(newArr));//sirf return kr rhe ha to console log lena hai
