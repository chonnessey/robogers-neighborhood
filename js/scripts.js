// Business Logic
function beepBoop(text) {
  // const phraseArray = ["Beep!", "Boop!", "Won't you be my neighbor?"];
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const number = text.toString(" ");
  for (let i = 0; i < numbersArray.length; i+=1) {
    if (numbersArray[i] === number[0]) {
      number.toString("Beep!")
    }
  }

}


// numberArray.splice(0, 1, "Beep!")
// console.log(numberArray);
// let inputtedArray = [];


// function beepBoop(number) 

//   if (text === 0); 
//     return inputtedArray = [0];
// }
//   for (let i = 0; i > phraseArray.length; i +=1) {
//     inputtedArray.slice(phraseArray[i] +=1)
// }


// UI logic
$(document).ready(function() {
  $("#numero").submit(function(event) {
    event.preventDefault();
  });
});
