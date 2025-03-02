const name = "Deepankar"
const repoCount = 50

//console.log(name + repoCount + "hello")    // old methord not recomended

//console.log(`Hi my name is ${name} and my repo count is ${repoCount}`) //concatination

const gameName = 'Deepankar';

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(-7,7);
// console.log(anotherString);

const newStringOne = "    Deep    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://deepankar.com/deep%20adak";

// console.log(url.replace('%20','-'));

// console.log(url.includes('sundar'));

const gameChange = 'hello-world-hi';
// console.log(gameChange.split('-'));

// Strings methords practice from MDN ---------------------------------------------------------------


//String.prototype.at()

// const sentence = "The quick brown fox jumps over the lazy dog.";
// let index = 5;

// console.log(`An Index of ${index} returns the charachter ${sentence.at(index)}`);

// index = -4;
// console.log(`An Index of ${index} returns the charachter ${sentence.at(index)}`);

//String.prototype.charAt()

// const sentence1 = "The quick brown fox jumps over the lazy dog."

// const index1 = 4;

// console.log(`The character index is ${index1} from the sentence ${sentence1.charAt(index)}`);


//String.prototype.charCodeAt()
// const test = "The quick brown fox jumps over the lazy dog.";

// const index = 4;

// console.log(`The character ${test.charCodeAt(index)} is equal to ${index}`);

//String.prototype.codePointAt()

// const icons = "☃★♲";
// console.log(icons.codePointAt(1));

// # String.prototype.concat()

// const str1 = "Hello";
// const str2 = "world";

// console.log(str1.concat(" ", str2));

// console.log(str2.concat(", ", str1));


// # String.prototype.endsWith()

// const str1 = "Cats are the best!";

// console.log(str1.endsWith("best!"));
// console.log(str1.endsWith("best",17));

// const str2 = "Is this a question?";
// console.log(str2.endsWith("question"));
















