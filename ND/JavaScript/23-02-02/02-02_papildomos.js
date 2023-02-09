function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}





/**Metam monetą. Monetos kritimo rezultatą imituojam rand() funkcija,
 *  kur 0 yra herbas, o 1 - skaičius.
 *  Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje:
 *  “S” jeigu iškrito skaičius ir “H” jeigu herbas.
 *  Suprogramuokite keturis skirtingus scenarijus kai monetos metimą stabdome:
Iškritus herbui;
Tris kartus iškritus herbui;
Tris kartus iš eilės iškritus herbui;
 */



let herbas = 0;
let skaicius = 1;
let rezultatas = "";


document.write("<h5>Pirma sąlyga: Metimai stabdomi iškritus H-(Herbui)</h5>")

while (true) {
    let metimas = rand(0, 1);

    if (metimas === skaicius) {
        rezultatas += "S";
    } else {
        rezultatas += "H";
        break;
    }


}

document.write(rezultatas + "<br>");




document.write("<h5>Antra sąlyga: Sustabdyti metimus jeigu tris kartus iškris H-(Herbas)</h5>")


rezultatas = "";
let kartai = 0;


while (true) {
    let metimas = rand(0, 1);

    if (metimas === skaicius) {
        document.write("S");
    } else if (metimas === herbas) {
        document.write("H");
        kartai++;
    } if (kartai >= 3){
        break;
    }

    
}

document.write(rezultatas + "<br>");



document.write("<h5>Trečioji sąlyga: Sustabdyti monetos metimus jeigu H-(Herbas) iškrito tris kartus iš eilės.<h5>")


rezultatas = "";
kartai = 0;

while (true) {
    let metimas = rand(0, 1);
    

    if (metimas === skaicius) {
        document.write("S");
        kartai = 0;
    } else if (metimas === herbas) {
        document.write("H");
        kartai++;
    } if (kartai == 3 ){
        break;
    }

    }

    



document.write(rezultatas + "<br>");


/**Kazys ir Petras žaidžiai šaškėm.
 *  Petras surenka taškų kiekį nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25.
 *  Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo:
 *  ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​.
 *  Žaidimą laimi tas, kas greičiau surenka 222 taškus.
 *  Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų.
 */

document.write("<h3>Kazys ir Petras žaidžiai šaškėm</h3>" + "<p></p>")



let zaidejas = "Petras";
let zaidejas2 =  "Kazys";
let Petrorezultatas = 0;
let Kaziorezultatas = 0;
let Partija = 1;

while(true){


let Petro_taskai = rand(10,20);
let Kazio_taskai = rand(5,25);

Petrorezultatas += Petro_taskai;
Kaziorezultatas += Kazio_taskai;


document.write(`Partijos nr: ${Partija}`+ "<br>");
Partija++;

if (Petro_taskai > Kazio_taskai){
    document.write(`Partiją laimėjo: ${zaidejas}`+ ", nes jo rezultas " + `${Petro_taskai}`+"." +  "<br>" + " Kazys surinko: " + `${Kazio_taskai}` +"." + "<br>"+ "<br>");
}else if(Kazio_taskai > Petro_taskai){
    document.write(`Partiją laimėjo: ${zaidejas2}`+ ", nes jo rezultatas " + `${Kazio_taskai}`+"." + "<br>" +  " Pertras surinko: " +`${Petro_taskai}` + "." + "<br>"+"<br>");
}else if (Petro_taskai === Kazio_taskai){
    document.write("Lygiosios abiejų žaidėjų rezultatas vienodas."+ "<br>"+ "<br>");

if (Petrorezultatas >= 222){
    document.write("Turnyrą laimėjo: "+ `${zaidejas}`+ " surinkęs: " + `${Petrorezultatas}`+"<br>");
    break;
}else if(Kaziorezultatas >= 222){
    document.write("Turnyrą laimėjo: "+ `${zaidejas2}`+ " surinkęs: " + `${Kaziorezultatas}`+ " taškus."+ "<br>");
break;
}

    
}
}