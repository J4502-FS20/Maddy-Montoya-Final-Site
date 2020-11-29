function check(){

  var question1=document.quiz.question1.value;
  var question2=document.quiz.question2.value;
  var question3=document.quiz.question3.value;
  var correct=0

  if (question1 == "answer1") {
    correct++;
  }

  if (question2 == "answer5") {
    correct++;
  }

  if (question3 == "answer9") {
    correct++;
  }

//  if (question4 == "answer11") {
  //  correct++;
//  }

  //if (question5 == "answer13") {
    //correct++;
//  }

var messages = ["Awesome job!", "You're getting there!", "Keep trying!"];

var range;
    if (correct < 1){
      range=2;
    }

    if (correct > 0 && correct < 3){
      range=1;
    }

    if (correct > 2){
      range=0;
    }

  document.getElementById("results").style.visibility = "visible";

  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";



}
