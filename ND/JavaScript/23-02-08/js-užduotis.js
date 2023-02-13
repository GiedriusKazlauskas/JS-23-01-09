function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**Sumodeliuokite vinies kalimą.
 *  Įkalimo gylį sumodeliuokite pasinaudodami rand() funkcija.
 *  Vinies ilgis 8.5cm (pilnai sulenda į lentą).
 */
document.write(`<h3 style="color: red;">Variantas a:</h3> "Įkalkite" 5 vinis mažais smūgiais.
 Vienas smūgis vinį įkala 5-20 mm.
  Suskaičiuokite kiek reikia smūgių kai vienos vinies ilgis yra 8,5 cm.
`+ "<br>"+ "<br>")



// kodėl pakimba naršyklė jeigu į while ciklą įkeliami papildomi kintamieji ? 
let vinis = 85;
let smugiai = 0;



while(true){
let smugiojega = rand(5,20);

if(vinis <= 0){
    document.write("Pirma vinis įkalta." + "<br>");
    document.write("Pirmai viniai įkalti prireikė: "+ smugiai + " smūgių."+ "<br>"+ "<br>");
    break;

}else {
    
    vinis -= smugiojega;
    console.log("Pirma vinis: " + vinis);
    smugiai++;
}

}


 let vinis2 = 85;
 let smugiai2 = 0;


 while(true){
 let smugiojega2 = rand(5,20);

 if(vinis2 <= 0){
document.write("Antra vinis įkalta." + "<br>");
     document.write("Antrai viniai įkalti prireikė: "+ smugiai + " smūgių."+ "<br>"+ "<br>");
     break;

}else {
    
    vinis2 -= smugiojega2;
    console.log("Antra vinis: " + vinis2);
     smugiai2++;
 }

 }



 let vinis3 = 85;
 let smugiai3 = 0;


 while(true){
 let smugiojega2 = rand(5,20);

 if(vinis3 <= 0){
document.write("Trečia vinis įkalta." + "<br>");
     document.write("Trečiai viniai įkalti prireikė: "+ smugiai + " smūgių."+ "<br>"+ "<br>");
     break;

}else {
    
    vinis3 -= smugiojega2;
    console.log("Trečia vinis: " + vinis3);
     smugiai3++;
 }

 }



 let vinis4 = 85;
 let smugiai4 = 0;


 while(true){
 let smugiojega2 = rand(5,20);

 if(vinis4 <= 0){
document.write("Ketvirta vinis įkalta." + "<br>");
     document.write("Ketvirtai viniai įkalti prireikė: "+ smugiai + " smūgių."+ "<br>"+ "<br>");
     break;

}else {
    
    vinis4 -= smugiojega2;
    console.log("Ketvirta vinis: " + vinis4);
     smugiai4++;
 }

 }



 let vinis5 = 85;
 let smugiai5 = 0;


 while(true){
 let smugiojega2 = rand(5,20);

 if(vinis5 <= 0){
document.write("Penkta vinis įkalta." + "<br>");
     document.write("Penktai viniai įkalti prireikė: "+ smugiai + " smūgių."+ "<br>"+ "<br>");
     break;

}else {
    
    vinis5 -= smugiojega2;
    console.log("Penkta vinis: " + vinis5);
     smugiai5++;
 }

 }



 document.write(`<h3 style="color: red;">Variantas b:</h3> “Įkalkite” 5 vinis dideliais smūgiais.
  Vienas smūgis vinį įkala 20-30 mm, bet yra 50% tikimybė (pasinaudokite rand() funkcija tikimybei sumodeliuoti),
   kad smūgis nepataikys į vinį. Suskaičiuokite kiek reikia smūgių.

` + "<br>" + "<br>");

let vinis6 = 425;
let smugiai6 = 0;



while(true){
let smugiojega = rand(20,30);

if(vinis6 <= 0){
    document.write("Šešta vinis įkalta." + "<br>");
    document.write("Šeštai viniai įkalti prireikė: "+ smugiai + " smūgių."+ "<br>"+ "<br>");
    break;

}else if(rand(0,1)){
continue;
}else {
    
    vinis6 -= smugiojega;
    console.log("Šešta vinis: " + vinis6);
    smugiai6++;
}

}