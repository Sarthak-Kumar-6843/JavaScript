//Arrays

const MyArrays = [1 ,3 ,4 , 7, 8, 9]
const newArr = new Array(1,4,5,6,3,4,2)
// console.log(MyArrays[0]);

//+++++++++++++++++++++++ Arrays Methos +++++++++++++++++++++++
// MyArrays.push(6)
// MyArrays.push(11)
// MyArrays.pop()
// console.log(MyArrays);

// MyArrays.unshift(9)
// MyArrays.shift()


// console.log(MyArrays.includes(9));
// console.log(MyArrays.indexOf(7));

// const newArr2 = MyArrays.join()
// console.log(MyArrays);
// console.log(newArr2);
// console.log(typeof newArr2);

//slice , splice \

console.log("A ", MyArrays);

const mna1 = MyArrays.slice(1,3)

console.log(mna1);
console.log("B ",MyArrays);

const mna2 = MyArrays.splice(1,3)//manipulates original array check output

console.log("C ",MyArrays);
console.log(mna2);

