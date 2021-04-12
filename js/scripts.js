// Business Logic
function beepBoop(number) {
  let userInputArray = [];
  // let transFormedArray = [];
  for (let i = 0; i < number; i++) {
    userInputArray.push([i].toString()); {
      if ([i].toString().includes("1")) {
        userInputArray.splice(1, 1, "Beep!")
      } else if ([i].toString().includes("2")) {
        userInputArray.splice(2, 1, "Boop!")
      } else if ([i].toString().includes("3")) {
        userInputArray.splice(3, 1, "Won't you be my neighbor?")
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
