const user = {
  username : "sarthak",
  price : 199,

  welcomemsg : function() {
    console.log(`${this.username} welcome`);
      console.log(this);
  }

} 

// user.welcomemsg()
// user.username = "sam"
// user.welcomemsg()
// console.log(this);

// function chai() {
//   let username = "abc"
//   console.log(this.username);
// }

// chai()

const chai = () => {//arrow function
  let username = "abc"
  console.log(this.username);
}

// chai()

// const add2 = (n1,n2) => {
//   return n1 + n2;
// }

const add2 = (n1,n2) => (n1 + n2);//another way of arrow function
console.log(add2(3,2));
