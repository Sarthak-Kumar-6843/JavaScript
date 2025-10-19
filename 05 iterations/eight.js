//REDUCE
const myNums = [1,2,3]

//REDUCE WITH FUNCTION
// const myTotal = myNums.reduce( function (acc,currval) {
//   console.log(`acc: ${acc} and currval : ${currval}`);
//   return acc + currval
// }, 0)

//REDUCE WITH ARROW FUNCTION
const myTotal = myNums.reduce ( (acc,curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
  {
    itemName : "js-course",
    price : 2999
  },
  {
    itemName : "python-course",
    price : 999
  },
  {
    itemName : "mob-dev-course",
    price : 24999
  },
  {
    itemName : "ds-course",
    price : 12999
  },
]

const Price = shoppingCart.reduce( (acc,item) => acc + item.price, 0)

console.log(Price);
