
var countDownDate = new Date().getTime() + (2 * (1000 * 60));

$("#timer").html("<h3>Time Remaining: " + 2 + " minutes " + 00 + " seconds</h3> ");


var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="timer"
    $("#timer").html("<h3>Time Remaining: " + minutes + " minutes " + seconds + " seconds</h3> ");
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        $("#timer").html("<h3>EXPIRED</h3>");
    }
}, 1000);


$(document).ready(function () {
  //setting the questions, choices and answers into a variable
  var questions = [
    {
    question: "Who was the first superhero to appear in an American comic book?", 
    choices: ["Batman", "Captain America", "Spider-Man", "Superman"], 
    answer: "Superman"
    },
    {
    question: "What was the comic that began Stan Lee's Marvel Universe?", 
    choices: ["Amazing Spider-Man", "Captain America", "Fantastic Four", "Invincible Iron Man"], 
    answer: "Fantastic Four"
    },
    {
    question: "Which comic book property is the most financially successful?", 
    choices: ["Batman", "Avengers", "Spider-Man", "X-Men"], 
    answer: "Spider-Man"
    }
  ];

  $("#strt").click(function() {
      $("#strt").hide();
      for (var i = 0; i < questions.length; i++) {
          var thisQ = questions[i].question;
          //console.log(thisQ);
          $("#questions").append("<p>" + thisQ + "</p>");

          for (var j = 0; j < questions[i].choices.length; j++) {
              var thisChoice = questions[i].choices[j];
             // console.log(thisChoice);
              $("#questions").append(
                  "<div class='form-check form-check-inline'>" +
                  "<input class='form-check-input' type = 'radio' name='inlineRadioOptions' + id = 'inlineRadio'" + [j] + "' value='option1" + [j] + "'>" +
                  "<label class='form-check-label' form ='inlineRadio1'>" + thisChoice + "</label></div>");

              


          }
      }


      var submitButton = "<button id='submit'>Submit</button>"
      $("#questions").append(submitButton); //creates submit button for use later
  });

  $("#submit").click(function() {
    console.log("test");
    var name = document.getElementsByName("inlineRadioOptions");
    for (var k=0; k < name.length; k++ ) {
      if(name[k].checked) {
        console.log("hi");
      }
    }
  });
})


  //$(document).on("click", "#start", logQuestions);

  //$(document).on("click", "#submit", submit);

// processing the answers from radio buttons by reading their individual values
// inside a loop

//   for (var i=0; i<)
//   var nameStr1 = "input[name=inlineRadioOptions";
//   var nameStr2 = "]:checked";
//   var fullNameStr = $(nameStr1 + i + nameStr2);

//   if (fullNameStr.val() == null) {
//       myChoices.push("unanswered");

//   }
//   else {
//       myChoices.push(fullNameStr.val());
//   }

