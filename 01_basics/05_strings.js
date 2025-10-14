const name = "sarthak"
const repoCount = 50

// console.log(name + repoCount + " Value");//old
console.log(`hello my name is ${name} and my repocount is ${repoCount}`);//new

const gameName = new String(`hitesh-hc-com`)//another way to declare string

console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newString1 = "   sarthak    "
console.log(newString);
console.log(newString1.trim());

const url = "https://sarthack.com/sarthak%20abc"
console.log(url.replace('%20','-' ));

console.log(url.includes('sarthak'));
console.log(url.includes('gupta'));


console.log(gameName.split('-'));

