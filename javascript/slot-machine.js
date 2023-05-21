/*
   Crear un juego de tragaperras que genere una jugada calculando tres combinaciones 
   de frutas de un total de 5 frutas diferentes.
   Además en cada jugada se calculará una apuesta de un valor entre 1 y 10.
   El premio será un múltipo de la apuesta juegada cuando ocurran cualquiera de estas 
   combinaciones:
   x1 si coinciden la fruta 1 y 3
   x3 si coinciden la fruta 2 y 3
   x5 si coinciden la fruta 1 y 2
   x7 si coinciden la fruta 1, 2 y 3
*/

const fruits = ["🍏", "🍐", "🍊", "🍋", "🍌"];
let play = [];
let prize = 0;
do{
  play = generatePlay();
  console.log(play);
  

} while (calculatePrize(play)!== 10);


function generatePlay() {
  const play = [];
  for (let i = 0; i < 3; i++) {
    const playIndex = Math.floor(Math.random() * fruits.length);
    play.push(fruits[playIndex]);
  }
  return play;
};

function calculatePrize(play) {
    let prize = 0;
    for (let i = 0; i < play.length; i++) {
      if (play[i] === "🍐" && play[i] === "🍋") {
        prize += 1;
      } else if (play[i] === "🍊" && play[i] === "🍋") {
        prize += 3;
      } else if (play[i] === "🍐" && play[i] === "🍊" ) {
        prize += 5;
      } else if (play[i] === "🍐" && play[i] === "🍊" && play[i] === "🍋") {
        prize += 7;
      } 
    return prize;
};
};



