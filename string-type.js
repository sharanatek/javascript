const a = "example of a \
string with escaped newline \
characters";

const b = "example of a string with escaped newline characters";
console.log("value is "+(a === b)); // => true

const nBreadLoaves = 4;
const breadLoafCost = 2.40;

console.log(
`
  I went to the market and bought ${nBreadLoaves} loaves of
  bread and it cost me ${nBreadLoaves * breadLoafCost} euros.
`);
