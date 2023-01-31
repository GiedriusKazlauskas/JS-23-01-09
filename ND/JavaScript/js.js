
// pirma užduotis.

var Name= "Travis";
var lName= " Fimmel";
const full=Name+lName;
console.log(full);

// antra užduotis.

var vardas="Java";
var pavardė=" Script";
var year=1997;
var tYear=2023;

var age=tYear - year;
var string="Aš esu "+vardas + pavardė + "\." + " Man yra "+ age + " metai.";
console.log(string);

// trečia užduotis.

var n="Jackie";
var p="Chan";
var np="kiehan";

console.log(np);

// Ketvirta užduotis.

var stringas="Once upon a time in hollywood";
var pakeisti=stringas.replace("Once upon a time in hollywood","*nce up*n a time in h*llyw**d");
console.log(pakeisti);

// Penkta užduotis. 


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var pirmas=rand(0,2);
var antras=rand(0,2);
var trečias=rand(0,2);
var ketvirtas=rand(0,2);

console.log(pirmas,antras,trečias,ketvirtas);







