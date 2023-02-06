/**2023-02-02
Naršyklėje nupieškite linija iš 400 “*”.
 Programiškai “suskaldykite” žvaigždutes taip,
  kad vienoje eilutėje nebūtų daugiau nei 50 “*”.
 */

document.write("<h3>Pirma užduotis:</h3>");



let simbolis = "* ";



for (let i = 0; i < 8; i++) {
  document.write(`<h3>${simbolis.repeat(50)}</h3>`)+ "<br>";
 
}


document.write("<h3>Antra užduotis:</h3>")



/**Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300,
 *atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių
 *už 150.Skaičiai didesni nei 275 turi būti raudonos spalvos.
 */

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


let rezultatas = "";
let kiekis = 0;
for(let i = 0; i < 300;i++){
  let skaicius = rand(0,300);

  if(skaicius > 275){
    rezultatas += `<span style="color: red ;">${skaicius}</span>`+ " ";
  }else{
    rezultatas += skaicius + " ";
  }
  if (skaicius > 150){
    kiekis++;
  }
}

document.write(rezultatas);
document.write("<h3>Iš viso Skaičių kurie didesni nei 150 yra:</h3>"+kiekis);

/**Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000,
 *  kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais.
 *  Po paskutinio skaičiaus kablelio neturi būti. Jeigu reikia,
 *  panaudokite css, kad visi rezultatai matytusi ekrane.
 */

document.write("<h3>Trečia užduotis:</h3>" + "<p>skaičiai nuo 1 iki 3000 kurie dalijasi iš 77 be liekanos.</p> ");

let atsakymas = "";
let daliklis = 77;
let duotasskaicius = 3000;
let i =1;

while( i <= duotasskaicius){

  let kablelis = ", ";

if(i % daliklis === 0){ 
  atsakymas += i + kablelis;
}
i++
}
document.write(atsakymas);




document.write("<h3>Ketvirta užduotis:</h3>")

/* Nupieškite kvadratą iš “*”, kurio kraštines sudaro 100 “*”.
 Panaudokite css stilių, kad kvadratas ekrane atrodytų kvadratinis.
*/

let xdirection = 0;
let ydirection = 0;
let showin = "";


while(ydirection < 55){
  xdirection = 0;
  
   while(xdirection < 55){
    if(xdirection === ydirection || xdirection === 54  - ydirection){
      showin += `<span style="color:red">*</span>`;
    }else{
      showin += "*";
    }
    
    xdirection++;
   }

   

   showin += "<br>";
   ydirection++;

   
}


console.log(showin)
document.write(`<div class="coconas">${showin}</div>`);
document.write(`<h3> Penkta užduotis:</h3>`+ `<p>Nubrėžti raudonas įstrižaines suformuotame kvadrate.</p>`)