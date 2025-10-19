const myNums = [1,2,3,4,5,6,7,8,9,10]
//MAP

// const newNums = myNums.map( (num) => num + 10)

// const newNums2 = []
// myNums.forEach ( (num) => {
//   newNums2.push(num + 10)
// } )

const newNums = myNums
    .map( (num) => num*10 )
    .map( (num) => num + 1)
    .filter( (num) => num >= 40)
    
console.log(newNums);


