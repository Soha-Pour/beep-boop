var ansArr = [""];
var finalOutput = function(userInput) {
  for (var index = 0; index <= userInput; index++) {
    var indexArr = JSON.stringify(index).split('');

      if ((indexArr.includes("1")) && (indexArr.includes("2"))) {
        ansArr.push(" Beep");

      } else if (indexArr.includes("3")) {
        ansArr.push(" I'm sorry, I can't do that");

      } else if (indexArr.includes("1")) {
        ansArr.push(" Beep");

      } else if ((indexArr.includes("2")) && (indexArr.includes("3"))) {
        ansArr.push(" I'm sorry, I can't do that");

      } else if (indexArr.includes("2")) {
        ansArr.push(" Boop");

      } else {
        ansArr.push(" " + index);
      }
      
    }
  };


$(document).ready(function() {

  $("form#blanks").submit(function(event) {
    event.preventDefault();
    ansArr = [""];

    var userInput = $("#user-input").val();
    var output = finalOutput(userInput);
    $(".output").text(ansArr);

  });



});
