// Business Logic
function beepBoop(number) {
  let userInputArray = [];
  for (let i = 0; i < number; i++) {
    userInputArray.push([i].toString());
  }
  return  userInputArray;
}



// UI logic
$(document).ready(function() {
  $("#numero").submit(function(event) {
    event.preventDefault();
    let userInputArray = $("number").val();
    $("#results").text(userInputArray);
    // let userNumber = number;
  });
});
