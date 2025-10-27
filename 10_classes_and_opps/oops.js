const user = {
    username : "hitesh",
    loginCount : 8,
    signedIn : true,


    getUserDetails : function (){
    //   console.log("got it");
    //   console.log(`username : ${this.username}`); 
    console.log(this);
    
    }
}



// console.log(user.username);
// // console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const user1 = new User("abc", 12, true)
const user2 = new User("chai", 11, false)
console.log(user1.constructor);
console.log(user2);
 