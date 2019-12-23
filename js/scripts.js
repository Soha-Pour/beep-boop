var finalOutput = function(userInput) {
  for (var index = 0; index <= userInput; index += 1) {
    var ansArr = [];
    console.log(index);
      if (index === 1) {
        console.log("Beep");
      } else if (index === 2) {
        console.log("Boop");
      } else if (index ===3) {
        console.log("I'm sorry, I can't compute that");
      }
    }

  };




$(document).ready(function() {

  $("form#blanks").submit(function(event) {
    event.preventDefault();

    var userInput = $("#user-input").val();
    var output = finalOutput(userInput);
    // console.log(userInput);
  });
});
