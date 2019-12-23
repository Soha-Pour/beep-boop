var ansArr = [""];
var finalOutput = function(userInput) {
  for (var index = 0; index <= userInput; index++) {
    var indexArr = JSON.stringify(index).split('');
    console.log(indexArr);
      if ((indexArr.includes("1")) && (indexArr.includes("2"))) {
        ansArr.push("Beep");
        // console.log("Boop");
      } else if (indexArr.includes("3")) {
        ansArr.push("I'm sorry, I can't compute that");
        // console.log("I'm sorry, I can't compute that");
      } else if (indexArr.includes("1")) {
        ansArr.push("Beep");
        // console.log("Beep");
      } else if ((indexArr.includes("2")) && (indexArr.includes("3"))) {
        ansArr.push("I'm sorry, I can't compute that");
        // console.log("I'm sorry, I can't compute that");
      } else if (indexArr.includes("2")) {
        ansArr.push("Boop");
        // console.log("Boop");
      }
    }
  };




$(document).ready(function() {

  $("form#blanks").submit(function(event) {
    event.preventDefault();

    var userInput = $("#user-input").val();
    var output = finalOutput(userInput);
    alert(ansArr);

  });
});
