// Business Logic
const phraseArray = ["0", "Beep!", "Boop!", "Won't you be my neighbor?"];
let inputtedString = ("");


function beepBoop(text) {
  if (text === 0); 
    inputtedString = "0";
}
// function beepBoop(text) {
//   if (text === 1);
//   return "Beep!";
// }
// function beepBoop(text) {
//   if (text === 2);
//   return "Boop!";
// }
// function beepBoop(text) {
//   if (text === 3);
//   return "Won't you be my neighbor?";
// }

// UI logic
$(document).ready(function() {
  $("#numero").submit(function(event) {
    event.preventDefault();
  });
});
