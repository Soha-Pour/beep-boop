var finalOutput = function(userInput) {
  for (var index = 0; index <= userInput; index++) {
    var indexArr = JSON.stringify(index).split('');
    var ansArr = [];
    console.log(indexArr);
      if ((indexArr.includes("1")) && (indexArr.includes("2"))) {
        console.log("Boop");
      } else if (indexArr.includes("3")) {
        console.log("I'm sorry, I can't compute that");
      } else if (indexArr.includes("1")) {
          console.log("Beep");
      } else if ((indexArr.includes("2")) && (indexArr.includes("3"))) {
        console.log("I'm sorry, I can't compute that");
      } else if (indexArr.includes("2")) {
        console.log("Boop");
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
