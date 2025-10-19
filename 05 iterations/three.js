//for of

const arr = [1,2,3,4,5]

for (const num of arr) {
//   console.log(num);
}

const greeting = "hlo"

for (const greet of greeting) {
  console.log(greet);
}

//Maps

const map = new Map ()

map.set('IN',"india")
map.set('usa',"US")
map.set('Fr',"France")

console.log(map);

for (const [key, value] of map) {
  console.log(key, '-', value);
  
}

for (const key of map) {
  console.log(key);
}
