const string = 'some 1 content 2 with 3 digits';
console.log(string.match(/1|2|3/g)); // => ["1", "2", "3"]

console.log(/hello/.test('hELlO'));  // => false
console.log(/hello/i.test('hELlO')); // => true

//When using the RegExp constructor, you can pass your flags as the second argument:

RegExp('hello').test('hELlO');      // => false
RegExp('hello', 'i').test('hELlO'); // => true

// For a more realistic application, we may imagine a scenario in which 
// we wish to match sequences of digits, such as phone numbers. Perhaps we wish 
// to match only those phone numbers beginning with 0800 and containing a 
// further 4 to 6 digits. 
// We could do this with the following regular expression:

var matches = `This is a test in which exist some phone
  numbers like 0800182372 and 08009991.
`.match(
  /0800\d{4,6}/g
);
// => ["0800182372", "08009991"]

console.log(matches);

//JavaScript Demo: RegExp.prototype.test
console.log("JavaScript Demo: RegExp.prototype.test");
const str = 'table football';

const regex = RegExp('foo*');
console.log(regex.test(str));
//show where is exactly pointer the next search would start
console.log(regex.lastIndex);

const globalRegex = RegExp('foo*', 'g');
console.log(globalRegex.test(str));
//show where is exactly pointer the next search would start
console.log(globalRegex.lastIndex);