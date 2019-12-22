var finalOutput = function(userInput) {
  for (var index = 0; index <= userInput; index += 1) {
  alert(index);
  }
  
};


$(document).ready(function() {

  $("form#blanks").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#user-input").val());
    var output = finalOutput(userInput);



  });

});
