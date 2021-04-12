// Business Logic
function beepBoop(number) {
  let userInputArray = [];
  // let transFormedArray = [];
  const beep = "Beep!";
  const boop = "Boop!";
  const neighbor = "Won't you be my neighbor?";
  for (let i = 0; i < number; i++) {
    userInputArray.push([i].toString()); {
      if ([i].toString().includes("1")) {
        userInputArray
      }
    }
  }
  return  userInputArray;
}



// UI logic
$(document).ready(function() {
  $("#numero").submit(function(event) {
    event.preventDefault();
    let userInputArray = beepBoop($("#number").val());
    $("#results").text(userInputArray);
  });
});
