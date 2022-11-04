`use strict`

const randomNum=[];
let i = 0;
while (randomNum.length < 5){
    let num = Math.floor(Math.random() * (100 - 1) + 1);
    if (randomNum.includes(num) == false){
        randomNum.push(num);
    }
}
console.log(randomNum);
document.getElementById(`random_number`).innerHTML = (randomNum);

setTimeout(timer, 3000);
function timer(){
    document.getElementById(`random_number`).classList.add(`none`);
}

const userChoice = [];
let caughtNum = 0;
setTimeout(secondTimer, 3010);
function secondTimer(){
    for (i=0; i<5; i++){
    let userChoiceNum = Number(prompt(`Inserisci i numeri che hai visto uno per volta`));
    if (randomNum.includes(userChoiceNum)){
        userChoice.push(userChoiceNum);
        caughtNum = caughtNum + 1;
        }    
    }
    // console.log(userChoice);
    // console.log(caughtNum); 
    console.log((`hai indovinato questi numeri `)+(userChoice));
    console.log((`hai indovinato `)+(caughtNum)+(` numeri`)); 
}




