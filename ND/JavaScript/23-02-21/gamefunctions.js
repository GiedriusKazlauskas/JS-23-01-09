// let start = document.getElementById('start');
// let screen = document.getElementById('ekranas');

// function start(){

// }

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}



const npc = document.querySelector('.npc-style');
const color = ["green", "yellow", "purple", "grey", "yellowgreen", "black", "blue"];
const width = 1000;
const heigth = 400;
const npcWidth = 50;
const npcHeigth = 50;
let rounds = 0;
let roundTime = 0;
let totalTime = 0;// for test.
let playerPoints = 0;
let npcPoints = 0;
let roundPointsOfPlayer = 0;
let roundPointsOfNpc = 0;
let click = false;


 let game = setInterval(() => {
    
    roundTime++;
    
   //document.querySelector('.screen').innerHTML = `<span style="text-align: center; padding-top: 10px; z-index: 0;position: relative;">Laikas: ${roundTime}s</span>`
    npc.style.backgroundColor = color[rand(0, color.length - 1)];
    npc.style.top = rand(0, heigth - npcHeigth) + "px";
    npc.style.left = rand(0, width - 100) + "px";


    if(rounds >= 10){
        console.log("zaidimas baigtas")
        document.querySelector('.screen').innerHTML = `<div onclick="start()"><h4>Laikas baigėsi!</h4></div>`;

        clearInterval(game);

       
    }

    // round ends.
    if (roundTime >= 30) {
        document.querySelector('.result-table').innerHTML += `<span>${rounds}</span>`;
        document.querySelector('.result-table').innerHTML += `<span>${playerPoints}</span>`;
        document.querySelector('.result-table').innerHTML += `<span>${30 - playerPoints}</span>`+ `<br>`;

        //test
        if(roundTime === 30){
            totalTime++;
        }


        console.log(totalTime)
        roundTime = 0;
        playerPoints = 0;
        rounds++;
    }


    



     

}, 1000);







npc.addEventListener('click', () => {
    click = true;
    playerPoints++;
    roundPointsOfPlayer++;
    if(click)return;
   
})

function start(){
 
};