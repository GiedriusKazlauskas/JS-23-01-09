const store = document.querySelector(".shopas");
//Viršutinis (baltas) x mygtukas įjungia įrenginį ir televizoriuje atvaizduojama pasisveikinimo žinutė,
// taip pat šis mygtukas atsakingas už konsolės išjugimą.
// Tuo atveju rodoma atsisveikinimo žinutė.

function OnOff() {

 if (document.querySelector(".ekranas").style.background !== "black"){
document.querySelector(".ekranas").style.background = "rgb(63,143,251)";
document.querySelector(".ekranas").innerHTML = `<h1 id="on" value="On">Hello...</h1>`
document.querySelector(".ekranas").style.background= "radial-gradient(circle, rgba(63,143,251,1) 0%, rgba(7,70,193,1) 100%)";

}else if (document.querySelector(".ekranas").style.background === "rgb(63,143,251)" && document.querySelector(".ekranas").style.background === "radial-gradient(circle, rgba(63,143,251,1) 0%, rgba(7,70,193,1) 100%)"){


     document.getElementById("tv-screen").innerHTML = `<h2 id="off" >Goodbye...</h2>`;
     document.querySelector(".ekranas").style.background= "rgb(0,55,130)";
     document.querySelector(".ekranas").style.background= "radial-gradient(circle, rgba(0,55,130,1) 0%, rgba(0,6,19,1) 100%)";
}

}



/**Y (geltonas) mygtukas įjungia televizijos programą.
 *  Patalpinkite šį kodą į televizoriaus rėmelį:
<iframe width="100%" height="315" src="https://www.youtube.com/embed/y-28CssnqEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */


function iframe(){
document.querySelector('.ekranas').style = "";
document.querySelector('.ekranas').innerHTML = `<span><iframe width="100%" height="535" src="https://www.youtube.com/embed/y-28CssnqEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></span>`

}

/**B (raudonas) mygtukas grąžina vartotoją į pasisveikinimo ekraną. */
function back(){
    document.querySelector(".ekranas").style.background = "rgb(63,143,251)";
    document.querySelector(".ekranas").innerHTML = `<h1 id="on" value="On">Hello...</h1>`
    document.querySelector(".ekranas").style.background= "radial-gradient(circle, rgba(63,143,251,1) 0%, rgba(7,70,193,1) 100%)";
}


function web(){
    document.querySelector(".ekranas").src = "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe";
    
}





const games = [
    {image: `<img src="/imgs/gt.jpg" style="width:50px heigth:50px">`, name:"Grand Theft Auto V", price: `14.99`},
    {image: `<img src="/imgs/mc.png" style="width:50px heigth:50px">`, name: "Minecraft", price: `29.99`},
    {image: `<img src="/imgs/v.jpg" style="width:50px heigth:50px"`, name: "Valorant" , price: `Free`}
    
]







// rodo error ir neatvaizduoja lentelės turinio. 

games.forEach((produktas) =>{
    console.log(produktas)
     document.getElementById('lentele').innerHTML += 
    `<tr>
      <td>${produktas.image}</td>
      <td>${produktas.name}</td>
      <td>${produktas.price}</td>
     </tr>`;
     
 })