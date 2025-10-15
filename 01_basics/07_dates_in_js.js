//Date


let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let newDate = new Date(2025,0,25)
// let newDate = new Date(2025,0,25, 5, 3)


// let newDate = new Date("2025-10-15")


// console.log(newDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(newDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default',{
  weekday: "long",
 
})
console.log(newDate);


