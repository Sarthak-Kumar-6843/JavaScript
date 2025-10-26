
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async");
        resolve()
    },1000)
}).then(function(){
    console.log("resolved");
    
})