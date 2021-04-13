// Business Logic
function beepBoop(number) {
  let userInputArray = [];
  for (let i = 0; i <= number; i ++) {
    userInputArray.push([i].toString()); {
      if ([i].toString().includes("3")) {
        userInputArray.splice(i, 1, "Won't you be my neighbor?")
      } else if ([i].toString().includes("2")) {
        userInputArray.splice(i, 1, "Boop!")
      } else if ([i].toString().includes("1")) {
        userInputArray.splice(i, 1, "Beep!")
      } else {
        userInputArray[i]
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
