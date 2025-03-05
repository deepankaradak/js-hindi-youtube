const marvel_heros = ["Thor","IronMan","SpiderMan"];
const dc_heros =["superMan","Batman","flash"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// const all_newheros = [...marvel_heros,...dc_heros];

// console.log(all_newheros);


// flat
// const another_array =  [1,2,[3,4,5],6,[7,8,[9,10]]];
// const real_anotherarray = another_array.flat(Infinity);
// console.log(real_anotherarray);

console.log(Array.isArray("deepankar"));
console.log(Array.from("deepankar"));
console.log(Array.from({name:"Deepankar"}));   //intresting case

let Score1 = 100;
let Score2 = 200;
let Score3 = 300;

console.log("Total Score ", Array.of(Score1,Score2,Score3));







