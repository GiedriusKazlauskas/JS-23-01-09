
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}





document.write("<h3> Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.</h3>" + "<br>");

let masyvas_su_reidemis = ["A","B","C","D"];
let atsitiktinis_masyvas = [];
for (let i = 0; i < 200;i++){
atsitiktinis_masyvas[i] = masyvas_su_reidemis[(Math.floor(Math.random() * (masyvas_su_reidemis.length)))]
}


let A_skaiciuoklė = 0;
let B_skaiciuoklė = 0;
let C_skaiciuokle = 0;
let D_skaiciuokle = 0;




for (let A of atsitiktinis_masyvas){
    if (A === "A"){
        A_skaiciuoklė++;
    }
}

for (let B of atsitiktinis_masyvas){
    if (B === "B"){
        B_skaiciuoklė++;
    }
}

for (let C of atsitiktinis_masyvas){
    if (C ==="C"){
        C_skaiciuokle++;
    }
}

for (let D of atsitiktinis_masyvas){
    if (D === "D"){
        D_skaiciuokle++;
    }
}




console.log(atsitiktinis_masyvas);
document.write(atsitiktinis_masyvas + "<br>" + "<br>");
document.write(`"A" raidė pasikartojo: `+ A_skaiciuoklė + " kartus." + "<br>");
document.write(`"B" raidė pasikartojo: `+ B_skaiciuoklė + " kartus." + "<br>");
document.write(`"C" raidė pasikartojo: `+ C_skaiciuokle + " kartus." + "<br>");
document.write(`"D" raidė pasikartojo: `+ D_skaiciuokle + " kartus." + "<br>");
console.log(A_skaiciuoklė);
console.log(B_skaiciuoklė);
console.log(C_skaiciuokle);
console.log(D_skaiciuokle);


document.write("<h3>Išrūšiuokite 3 uždavinio masyvą pagal abecėlę.</h3>" + "<br>");


atsitiktinis_masyvas.sort();

document.write(atsitiktinis_masyvas);
console.log(atsitiktinis_masyvas);


document.write("<h3>Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami reiksmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.</h3>" + "<br>");

let antras_masyvas = ["A","B","C","D"];
let masyvo_kombo = [];
let masyvo_kombo2 = [];
let masyvo_kombo3 = [];

for (let i = 0; i < 60;i++){
masyvo_kombo[i] = antras_masyvas[(Math.floor(Math.random() * (antras_masyvas.length)))]
masyvo_kombo2[i] = antras_masyvas[(Math.floor(Math.random() * (antras_masyvas.length)))]
masyvo_kombo3[i] = antras_masyvas[(Math.floor(Math.random() * (antras_masyvas.length)))]
}

document.write("Pirmas masyvo derinys: " + masyvo_kombo + "<br>");
document.write("Pirmas masyvo derinys: " + masyvo_kombo2 + "<br>");
document.write("Pirmas masyvo derinys: " + masyvo_kombo3 + "<br>");



document.write("<h3>Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).</h3>" + "<br>");


const numbarr = [];
const numbarr2 = [];

for (let i =0; i < 100;i++){

    numbarr.push(rand(100,999));

}




for (let i =0; i < 100;i++){

    numbarr2.push(rand(100,999));
}



document.write(numbarr + "<br>");
document.write(numbarr2 + "<br>");

