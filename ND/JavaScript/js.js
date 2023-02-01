
/* pirma užduotis.

Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis).
 Atspausdinti trumpesnį stringą.*/


var Name= "Travis";
var lName= "Fimmel";

if(Name.length > lName.length){
    console.log("Trumpesnė eilutė ",lName)
}
else if(lName.length > Name.length){
    console.log("trumpesnė eilutė ",Name)
}else if(Name.length==lName.length){
    console.log("Abiejų eilučių ilgis vienodas")
}

/* antra užduotis.

 Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
 "Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".*/


var vardas="Java";
var pavardė=" Script";
var year=1997;
var tYear=2023;

var age=tYear - year;
var string="Aš esu "+vardas + pavardė + "\." + " Man yra "+ age + " metai.";
console.log(string);

/* trečia užduotis.

Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus.
 Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių.
  Jį atspausdinti.*/


var n="Jackie";
var p="Chan";

nn=n[n.length-1]+n[n.length-2]+n[n.length-3]+p[p.length-1]+p[p.length-2]+p[p.length-3];
console.log(nn);

/* Ketvirta užduotis.

Sukurti kintamąjį su stringu: “Once upon a time in hollywood”.
 Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.*/


var stringas="Once upon a time in hollywood";
var pakeisti=stringas.replaceAll("O","*").replaceAll("o","*");
console.log(pakeisti);

/* Penkta užduotis.

Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2.
 Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. */



function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var pirmas=rand(0,2);
var antras=rand(0,2);
var trečias=rand(0,2);
var ketvirtas=rand(0,2);

var nuliai=0;
var vienetai=0;
var dvejetai=0;

if (pirmas===0){
    nuliai++;
}else if(pirmas===1){
    vienetai++;
}else{
    dvejetai++;
}

if (antras===0){
    nuliai++;
}else if(antras===1){
    vienetai++;
}else{
    dvejetai++;
}

if (trečias===0){
    nuliai++;
}else if(trečias===1){
    vienetai++;
}else{
    dvejetai++;
}

if (ketvirtas===0){
    nuliai++;
}else if(ketvirtas===1){
    vienetai++;
}else{
    dvejetai++;
}

console.log(pirmas,antras,trečias,ketvirtas);

console.log("Nuliai: " +(nuliai));
console.log("vienetai: " +(vienetai));
console.log("dvejetai: " +(dvejetai));







