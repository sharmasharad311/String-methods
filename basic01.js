// -------String Methods------

/* Def. :- A string in JS is a sequence of characters enclosed in 
single and double quote, used to represent text. */

// ------We have some methods of String-----

// length()
let myName = "Sharad";
console.log("length is: " + myName.length);
// output: 6
// -------------------------------------------------------->

// indexOf()
let text = "I love Coding";
console.log("index num is :" + text.indexOf("love"));
// output: index num is 2
// -------------------------------------------------------->

// lastIndexOf()
let copyOfText = "I love Coding";
console.log("index num from end to start is: " + copyOfText.lastIndexOf("Coding"));
// output: 7

// -------------------------------------------------------->
// trim()
let trimString = "   jay shri ram ji maharaj ki jay   ";
console.log(trimString.trim());
// removes whitespaces form both ends of a string.

// -------------------------------------------------------->
// replace(search value, replace value)
let replaceString = "Jay Shri Ram Ji Maharaj";
console.log(replaceString.replace("Jay", "Jai"));
// output: jay becomes jai

// --------------------------------------------------------->
// split(seprator, limit)
let splitString = "I love coding games";
console.log(splitString.split(" "));
// splits a string into an array of substrings.
// output: ["I", "love", "coding", "games"]

// --------------------------------------------------------->
// slice(start, end)
let sliceString = "hello world";
console.log(sliceString.slice(3))
// extracts a section of a string and rturns it as a new string.
// output: "lo world"

// --------------------------------------------------------->
// concat()
let concatString1 = "hello";
let concatString2 = "world";
console.log(concatString1.concat(concatString2));
// output: helloworld




