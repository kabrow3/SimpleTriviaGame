// // Set the date we're counting down to
// var countDownDate = new Date().getTime() + (2 * (1000 * 60));

// $("#timer").html("<h3>Time Remaining: " + 2 + " minutes " + 00 + " seconds</h3> ");

// // Update the count down every 1 second
// var x = setInterval(function() {

//     // Get todays date and time
//     var now = new Date().getTime();
    
//     // Find the distance between now an the count down date
//     var distance = countDownDate - now;
    
//     // Time calculations for days, hours, minutes and seconds
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//     // Output the result in an element with id="timer"
//     $("#timer").html("<h3>Time Remaining: " + minutes + " minutes " + seconds + " seconds</h3> ");
    
//     // If the count down is over, write some text 
//     if (distance < 0) {
//         clearInterval(x);
//         $("#timer").html("<h3>EXPIRED</h3>");
//     }
// }, 1000);

//$("#questions").html("<h2>What was the first full length CGI movie?</h2>");
//$("#choices").html("<input type='radio' class='radio' id='A'> A Bug's Life" + " <input type='radio' class='radio' id='B'> Monster's Inc" + " <input type='radio' class='radio' id='C'> Toy Story" +" <input type='radio' class='radio' id='D'> The Lion King");
//$("#choices").on("click","radio", function() {
//    if ("#C".checked === true) {
//        alert("Correct!");
//    } else if (("#A".checked === true) || ("#B".checked === true) || ("#D".checked === true)) {
//        alert("Wrong!");
//    }
//})

$(document).ready(function () {
  //setting the questions, choices and answers into a variable
  var questions = [
      {
          question: "In the year 1900 in the US what was the most popular first names give to boy and girl babies?",
          choices: ["William and Elizabeth", "Joseph and Catherine", "John and Mary", "George and Anne"],
          answer: "John and Mary"
      },
      {
          question: "When did the Liberty bell get its name?",
          choices: ["when it was made in 1701", "when it rang on July 4 1776", "in the 19th century when it became a symbol of the abolition of slavery", "none of the above"],
          answer: "in the 19th century when it became a symbol of the abolition of slavery"
      },
      {
          question: "In the Roy Rogers-Dale Evans Museum, you will find Roy and Dale stuffed horses. Roy’s horse was named trigger what was the name of Dales horse?",
          choices: ["Buttermilk", "Daisy", "Scout", "Tulip"],
          answer: "Buttermilk"
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

