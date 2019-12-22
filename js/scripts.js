//Return range of numbers from 0 - userInput
var finalOutput = function(userInput) {
  var ansArr = [];
  for (var index = 0; index <= userInput.length; index += 1) {
    //Return "beep" for all digits containing a 1
      if (userInput[index] === "1") {
        console.log("Beep");

    //Return "boop" for all digits containing a 2
  } else if (userInput[index] === "2") {
        console.log("Boop");

    //Return "I'm sorry, I can't compute that" for all digits containing a 3
  } else if (userInput[index] === "3") {
        console.log("I'm sorry, I can't compute that");
      }



  }
};

// //Return "beep" for all digits containing a 1
//   if (userInput.includes("1")) {
//     alert("Beep");
//
// //Return "boop" for all digits containing a 2
//   } else if (userInput.includes("2")) {
//     alert("Boop");
//
// //Return "I'm sorry, I can't compute that" for all digits containing a 3
//   } else if (userInput.includes("3")) {
//     alert("I'm sorry, I can't compute that");
//   }
// };


$(document).ready(function() {

  $("form#blanks").submit(function(event) {
    event.preventDefault();

    var userInput = $("#user-input").val().split('');
    var output = finalOutput(userInput);
    console.log(userInput);
  });

});
