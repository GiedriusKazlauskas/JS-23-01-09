document.write(`<h3>Masyvai</h3>` + "<br>");


document.write(`<h3>Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29)
 kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
</h3>` + "<br>")


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const naujas_masygvas = [];

for (let i = 0; i < 30; i++) {

    naujas_masygvas.push(rand(5, 25));
}

document.write(naujas_masygvas + "." + "<br>");

document.write("<h3>A: Suskaičiuokite kiek masyve yra reikšmių didesnių už 10.</h3>")



console.log(naujas_masygvas);

let counter = 0;

for (let reiksme of naujas_masygvas) {
    if (reiksme >= 10)
        counter++;
}


document.write("Reikšmių kurios buvo didesnės negu 10 buvo: " + counter + "." + "<br>" + "<br>");



document.write(`<h3>B: Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli.
</h3>`);

let didziausias = 0;

for (let reiksme of naujas_masygvas) {
    if (reiksme > didziausias) {
        didziausias = reiksme;

    }


}
console.log(naujas_masygvas)
document.write("Didžiausia masyvo reikšmė yra: " + `${didziausias}` + "<br>" + "<br>");


let reiksmes_indeksas = [];

for (let indeksas in naujas_masygvas) {
    if (naujas_masygvas[indeksas] === didziausias) {
        reiksmes_indeksas.push(indeksas);
    }
}

document.write("Indekso pozicija(-jos) kuriose buvo didžiausias sk. : " + reiksmes_indeksas + "<br>");

document.write("<h3> C: Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;</h3>");


let rezultatas = 0;



for (let lyginiai_indeksai in naujas_masygvas) {
    if (lyginiai_indeksai % 2 === 0) {
        rezultatas += naujas_masygvas[lyginiai_indeksai];
    }

}


document.write("<h3>Reikšmių sumą: </h3>" + `${rezultatas}` + "<br>" + "<br>");





document.write("<h3>D: Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas.</h3>"
    + "<br>");


let masyvasnr2 = [];


for (let indexnr in naujas_masygvas) {
    masyvasnr2.push(naujas_masygvas[indexnr] - indexnr);
}



document.write("old array: " + naujas_masygvas + "." + "<br>");
document.write("new array: " + masyvasnr2 + "." + "<br>" + "<br>");



document.write("<h3>E: Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25,kad bendras masyvas padidėtų iki indekso 39</h3>");


for (let papildymas = 0; papildymas < 10; papildymas++) {
    masyvasnr2.push(rand(5, 25));
}

document.write(masyvasnr2);



document.write("<h3> F: Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių.</h3>");

let porinismasyvas = [];
let neporinismasyvas = [];

for (let i in naujas_masygvas){
    if (i % 2 === 0){
    porinismasyvas.push(naujas_masygvas[i]);
}else {
    neporinismasyvas.push(naujas_masygvas[i]);
}
    
    
}

document.write( "<p>masyvas iš porinių reikšmių: </p> " + porinismasyvas + "<br>");
document.write( "<p> masyvas iš neporinių reikšmių: </p> " + neporinismasyvas + "<br>" + "<br>");


document.write("<h3> G: Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15.</h3>" + "<br>");


for (let find in porinismasyvas ){
    if ( find % 2 === 0 && porinismasyvas[find] >= 15){
        porinismasyvas[find] = 0;
    }
}

document.write(porinismasyvas + "<br>");
console.log(porinismasyvas);



document.write("<h3> H: Suraskite pirmą indeksą, kurio elemento reikšmė didesnė už 10</h3>" + "<br>");

let pirmasindeksas;

for (let find2 in naujas_masygvas){
    if(naujas_masygvas[find2] > 10){
    pirmasindeksas = find2;
    break;
    }
}
document.write("Masyvas: " + naujas_masygvas +"." + "<br>" +" Pirmas indeksas: " + pirmasindeksas + "." + "<br>");


document.write("<h3> I: Iš masyvo ištrinkite visus elementus turinčius porinį indeksą.</h3>" + "<br>");


for ( let remove =0; remove < naujas_masygvas.length; remove++){
    naujas_masygvas.splice(remove,1);
    
}

document.write(naujas_masygvas+ "." + "<br>");


