//2023-02-01


/* Pasinaudokite atsitiktinio skaičiaus generavimo funkcija.
Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite atsitiktines reikšmes nuo 0 iki 4.
Didesnę reikšmę padalinkite iš mažesnės. 
Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.*/

function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log("Pirma užduotis:");

let pirmasKintamasis = rand(0, 4);
let antrasKintamasis = rand(0, 4);

console.log("Gauti skaičiai:");

console.log(pirmasKintamasis, antrasKintamasis);

if (pirmasKintamasis > antrasKintamasis) {
   console.log((pirmasKintamasis / antrasKintamasis).toFixed(2));

} else if (antrasKintamasis > pirmasKintamasis) {
   console.log((antrasKintamasis / pirmasKintamasis).toFixed(2));

} else if (pirmasKintamasis === 0 && antrasKintamasis === 0) {
   console.log("dalyba iš nulio negalima")
}
else if (pirmasKintamasis > antrasKintamasis && antrasKintamasis === 0) {
   console.log("dalyba iš nulio negalima");
} else if (pirmasKintamasis === 0 && antrasKintamasis > pirmasKintamasis) {
   console.log((pirmasKintamasis / antrasKintamasis).toFixed(2));
}


/*Naudokite funkciją ir sukurkite tris kintamuosius
 kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25.
 Raskite ir atspausdinkite vidurinę reikšmę.
 */
function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log("Antra užduotis:");


let test = rand(0, 25);
let test2 = rand(0, 25);
let test3 = rand(0, 25);

console.log("Gautos reikšmės:")

let trysSkaičiai = console.log(test, test2, test3);

let maziausiassk = Math.min(test, test2, test3);
let didziausiassk = Math.max(test, test2, test3);

if (maziausiassk == test && didziausiassk == test3) {
   console.log("Vidurinis sk: ", test2);
} else if (maziausiassk == test2 && didziausiassk == test3) {
   console.log("Vidurinis sk: ", test);
} else if (maziausiassk == test3 && didziausiassk == test2) {
   console.log("Vidurinis sk: ", test);
} else if (maziausiassk == test3 && didziausiassk == test) {
   console.log("Vidurinis sk: ", test2);
} else if (maziausiassk == test && didziausiassk == test2) {
   console.log("Vidurinis sk: ", test3);
} else if (maziausiassk == test2 && didziausiassk == test) {
   console.log("Vidurinis sk: ", test3);
}


/*Sukurti du kintamuosius.
 Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus.
  Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo
   ir pavardės kintamųjų raidžių.
   Jį atspausdinti. */

console.log("Trečia užduotis:");

let n = "Jackie";
let p = "Chan";

let np = n[0] + p[0];
console.log("Gauta reikšmė: ", np)


/*Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių.
 Stringo ilgis 3 simboliai.
 */


console.log("Ketvirta užduotis:")

let raides = "abcdefghijklmnopqrstuvwxyz";
let trysraides = console.log(raides[rand(0, raides.length - 1)], raides[rand(0, raides.length - 1)], raides[rand(0, raides.length - 1)], ".");
