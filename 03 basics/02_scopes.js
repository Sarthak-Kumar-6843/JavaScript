if (true) {
  let a = 10
  const b = 20
  // console.log("inner : ",a);
}
let a = 300
// var c = 300

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
  const username = "sarthak"

  function two(){
    const website = "youtube"
    // console.log(username);
  }
  // console.log(website);

  two()
}

// one()

if(true) {
  const username = "sarthak"
  if(username === "sarthak"){
    const website = "  youtube"
    // console.log(website + username);
  }
  // console.log(website);
}

// console.log(username);


// ++++++++++++++++++++ interesting +++++++++++++++++++++++++++

function add1 (n) {
  return n + 1;
}

add1 (5)

const add2 = function(n) {
  return n + 2;
}

add2(5)