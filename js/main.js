`use strict`

const randomNum=[];
let i = 0;
while (i < 5){
    let num = Math.floor(Math.random() * (100 - 1) + 1);
    if (randomNum.includes(num) == false){
        randomNum.push(num);
    }
    i++;
}
console.log(randomNum);
document.getElementById(`random_number`).innerHTML = (randomNum);

setTimeout(timer, 3000);
function timer(){
    document.getElementById(`random_number`).classList.add(`none`);
}