const coding = ["js" , "rb", "java", "python" ,"cpp"]


// coding.forEach(  function (item) {
//   console.log(item);
  
// }  )

// coding.forEach( (item) => {
//   console.log(item);
// } )

// function print (item) {
//   console.log(item);
 
// }
// coding.forEach(print)

// coding.forEach( (item , index , arr) => {
//   console.log(item, index,arr);
// } )

const my = [
  {
    languangeName : "javascript",
    languageFile : "js"
  },
  {
    languangeName : "java",
    languageFile : "java"
  },
  {
    languangeName : "python",
    languageFile : "py"
  }
]

my.forEach( (item) => {
  console.log(item.languangeName);
  
} )