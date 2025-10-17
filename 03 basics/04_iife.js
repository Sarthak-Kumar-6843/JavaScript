//IMMEDIATELY INVOKED FUNTCION EXPRESSIONS(IIFE)
(function chai() {
  console.log(`DB connected`);
})();

( () => {
  console.log(`db conneceted`);
})();

( (name) => {
  console.log(`db conneceted ${name}`);
})(`sarthak`);