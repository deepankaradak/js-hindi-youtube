const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);


// ----------------------------------------------------
const findbalance = balance.toString();
console.log(findbalance);
console.log(typeof findbalance);
console.log(findbalance.length);


// ----------------------------------------------------
const fixed = balance.toFixed();
console.log(fixed);

const fixedwithin = balance.toFixed(2);
console.log(fixedwithin);

// ----------------------------------------------------

const otherNumForPrecision = 23.8966;
console.log(otherNumForPrecision.toPrecision(3));

const otherNumForPrecision1 = 123.8966;
console.log(otherNumForPrecision1.toPrecision(3));

const otherNumForPrecision2 = 1123.8966;
console.log(otherNumForPrecision2.toPrecision(3));

// ----------------------------------------------------

const hundreds = 1000000;
console.log(hundreds.toLocaleString());

const hundreds1 = 1000000;
console.log(hundreds1.toLocaleString('en-IN'));


// ----------------------------------------------------MATHS ----------------------------------------------------

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(5.1));
console.log(Math.floor(9.1));

console.log(Math.min(2, 6, 9));
console.log(Math.max(2, 6, 9));

console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log((Math.random()*10) + 1);
console.log(Math.floor((Math.random()*10) + 1));

const Min = 10;
const Max = 20;

console.log(Math.floor((Math.random()*(Max-Min+1)) + Min));
