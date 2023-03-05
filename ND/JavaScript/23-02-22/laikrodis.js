let sekunde = '';
let minute = `0` + 0;
let valanda = `0` + 0;
let btn = document.querySelector('.btn btn-primary');


let laikrodis = setInterval(() => {
console.log(`veikia`);
sekunde++;
document.querySelector('.clock').innerHTML =`${valanda}`+ `: ` + `${minute}`+ ` : ` + `${sekunde}`;


if (sekunde === 6){
    minute++;
    sekunde = '';
}else if(minute === 60){
    valanda++;
}




},1000);



function stop() {
    clearInterval(laikrodis)
}

btn.addEventListener('click', () =>{
    laikrodis
})