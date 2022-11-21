var scoreEl = document.querySelector('.scores');
var timerEl = document.querySelector('.timer');
var startEl = document.querySelector('#start-screen');
var startBtn = document.querySelector('#begin');
var cancelBtn = document.querySelector('#exit');
var questionEl = document.querySelector('#questions');
var choicesEl = document.querySelector('.choices');
var question = document.querySelector('#question-title')
var choiceA = document.querySelector('#choiceA');
var choiceB = document.querySelector('#choiceB');
var choiceC = document.querySelector('#choiceC');
var choiceD = document.querySelector('#choiceD');
var submitBtn = document.querySelector('#submit');
var userScoreSpan = document.querySelector('#last-score')
var currentScore = 0;
var countDown = 75;
var round = 0;

var questionsArr = [{
  question: "What selector is used to select an id from the html page?",
  choiceA: "querySelector",
  choiceB: "getElementbyClass",
  choiceC: "var",
  choiceD: "()",
  correctAnswer: 'querySelector'
  }, {
  question: "What keyword do you need to set a variable?",
  choiceA: "for",
  choiceB: "function",
  choiceC: "object",
  choiceD: "var",
  correctAnswer: 'var'
  }, {
   question: "What method is used to display text on the screen?",
   choiceA: "random",
   choiceB: "textContent",
   choiceC: "addClass",
   choiceD: "querySelector",
   correctAnswer: 'textContent'
  }, {
   question: "What method is used to set an attribute",
   choiceA: "matches",
   choiceB: "target",
   choiceC: "setAttribute",
   choiceD: "innerHtml",
   correctAnswer: 'setAttribute'
  }, {
  question: "What method is used to cancel the default behavior of a button in a form?",
  choiceA: "preventDefault",
  choiceB: "state",
  choiceC: "switch",
  choiceD: "type",
  correctAnswer: "preventDefault"
  }, 
];
$(".timer").html('<p>'+ countDown +'</p>');
$(".timer").text(countDown + " seconds left");
$(".scores").html('<p>'+ currentScore +'</p>');
$(".scores").text(currentScore + " points");
startQuiz();
displayQuestions();
displayChoiceA()
displayChoiceB()
displayChoiceC()
displayChoiceD()
checkAnswers();
checkRound();

function startQuiz() {
  startEl.addEventListener("click", function(event) {
    if (event.target.matches('#begin') ) {
      startTimer();
      //hide Start Screen
      $('#start-screen').addClass('hide');
      //Display Questions
      $('#questions').removeClass('hide');  
    };
  });
};

function displayQuestions() {
  const questionText = questionsArr[round].question;
  question.textContent = questionText;
  return question.textContent;
};

function displayChoiceA() {
   const choiceAText = JSON.stringify(questionsArr[round].choiceA);
   choiceA.textContent = choiceAText;
   return choiceA.textContent;
};

function displayChoiceB() {
  const choiceBText = JSON.stringify(questionsArr[round].choiceB);
  choiceB.textContent = choiceBText;
  return choiceB.textContent;
};

function displayChoiceC() {
  const choiceCText = JSON.stringify(questionsArr[round].choiceC);
  choiceC.textContent = choiceCText;
  return choiceC.textContent;
};

function displayChoiceD() {
  const choiceDText = JSON.stringify(questionsArr[round].choiceD);
  choiceD.textContent = choiceDText;
  return choiceD.textContent;
};

function startTimer(){
 var interval = setInterval(function () {
  $(".timer").html('<p>'+ countDown +'</p>');
  $(".timer").text(countDown + " seconds left");
  countDown --;
  if(countDown <= 0 || round === 5) {
     clearInterval(interval);
    $('#questions').addClass('hide');
    $('#end-screen').removeClass('hide')
  }
}, 1000)}


function checkAnswers() {
  choicesEl.addEventListener("click", function(event) {
    
    // Increase score for correct answer
    if (event.target.textContent === JSON.stringify(questionsArr[round].correctAnswer)) {
      currentScore+= 20;
      rightAnswer();
      round++
      checkRound();
      return $(".scores").text(currentScore + " points");
    }
    // Subtract 10 secs for wrong answer
    else {
      countDown-= 10;
      wrongAnswer();
    }
    // Increment round by 1
    round++
    // Display Next Question and Choices
    checkRound();
})};

function nextQuestion() {
  // display next Question and Choices
  displayQuestions();
  displayChoiceA();
  displayChoiceB();
  displayChoiceC();
  displayChoiceD();
}

function checkRound() {
  if (round === 5) {
    $('#questions').addClass('hide');
    $('#end-screen').removeClass('hide')
    highScore();
  } else (
    nextQuestion()
  );
}

function highScore() {
  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    var usersScore = document.querySelector('#score').value;
    console.log(usersScore)
    localStorage.setItem("score", usersScore);
    renderLastScore();
  });
}


function rightAnswer() {
  var spectrum = ['#008000', '#FFF'];
  
  var speed = 50;
  var i = 0;
  window.setInterval(function () {
    document.body.style.backgroundColor = spectrum[i];
    if (i < spectrum.length) {
      i++; 
    } else {
      clearInterval();
    }
  }, speed);
}


function wrongAnswer() {
  var spectrum = ['#f00', '#FFF'];
  
  var speed = 50;
  var i = 0;
  window.setInterval(function () {
    document.body.style.backgroundColor = spectrum[i];
    if (i < spectrum.length) {
      i++; 
    } else {
      clearInterval();
    }
  }, speed);
}

function renderLastScore() {
  var lastScore = localStorage.getItem("score");
  console.log(lastScore);
  if (!lastScore) {
    return;
  }

  userScoreSpan.textContent = lastScore;
}