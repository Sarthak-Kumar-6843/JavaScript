const promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('async complete');
        resolve()
    }, 1000);
});

promise1.then(function(){
    console.log("promise cosnsumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async");
        resolve()
    },1000)
}).then(function(){
    console.log("resolved");
    
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@abc"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({user: "sarthak", password : "1234"})
        }else{
            reject("error")
        }
    },1000)
})

promise4
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log("the problem is either resolved or rejected"))


const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({user: "sarthak", password : "1234"})
        }else{
            reject("error")
        }
    },1000)
})

async function consumePromise5() {
    try{
    const response =  await promise5
    console.log(response);
    } catch (error){
        console.log(error);
        
    }
}

consumePromise5()

// async function getAlluser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("error");
//     }
// }

// getAlluser();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))

