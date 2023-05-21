/*Crear un juego de tragaperras que genere una jugada calculando tres combinaciones 
    de frutas de un total de 5 frutas diferentes.
    Además en cada jugada se calculará una apuesta de un valor entre 1 y 10.
    El premio será un múltipo de la apuesta juegada cuando ocurran cualquiera de estas 
    combinaciones:
    x1 si coinciden la fruta 1 y 3
    x3 si coinciden la fruta 2 y 3
    x5 si coinciden la fruta 1 y 2
    x7 si coinciden la fruta 1, 2 y 3
    const frutas = ["🍏", "🍐", "🍊", "🍋", "🍌"];*/


const prompt = require("prompt-sync")({sigint:true}); 

let bet = Number(prompt("Introduce your bet: "))
const fruits = ["🍏", "🍐", "🍊", "🍋", "🍌"];
let maxPlay = 3;
let round1;
let round2;
let round3;

for(let i= 0 ; i < maxPlay; i++){
    round1 = Math.floor(Math.random() * fruits.length);
    round2 = Math.floor(Math.random() * fruits.length);
    round3 = Math.floor(Math.random() * fruits.length);
    console.log(round1, fruits[1]);
    console.log(round2, fruits[2]);
    console.log(round3, fruits[3]);
}
    if(round1 === round2 && round2 === round3){
        console.log(`won!! you bet of ${bet}$ now is ${bet * 7}$`);
    }else if(round1 === round3){
        console.log(`won!! you bet of ${bet}$ now is ${bet * 1}$`);
    }else if(round2 === round3){
        console.log(`won!! you bet of ${bet}$ now is ${bet * 3}$`);
    }else if( round1 === round2){
        console.log(`won!! you bet of ${bet}$ now is ${bet * 5}$`);
    }else{
        console.log("You get lost, sorry");
    }
