const board = document.querySelector("#board");

const currentQuestionIndex = {
  _value: 0,
  
  get value() {
    return this._value;
  },
  
  set value(_value) {
    if(_value == this._value + 1) {
      this._value++;
    }
    
    else if(_value == this._value - 1) {
      this._value--;
    };
  }
};

const questions = [
  {
    "questionTitle": "Qual o seu nome?",
    "answers": {
      "a": "Nicolas",
      "b": "João",
      "c": "Robson",
      "d": "",
      "e": ""
    },
    "rightAnswerLetter": "a",
    "rightAnswerClickedBefore": false
  },
  {
    "questionTitle": "Qual é a cor?",
    "answers": {
      "a": "Red",
      "b": "Blue",
      "c": "Brown",
      "d": "",
      "e": ""
    },
    "rightAnswerLetter": "b",
    "rightAnswerClickedBefore": false
  },
  {
    "questionTitle": "Qual o seu nome?",
    "answers": {
      "a": "Nicolas",
      "b": "João",
      "c": "Robson",
      "d": "",
      "e": ""
    },
    "rightAnswerLetter": "a",
    "rightAnswerClickedBefore": false
  },
];

// Dark mode

const btnDarkMode = board.querySelector("#darkMode");
const lightBulbSvg = btnDarkMode.querySelector("svg#lightBulbSvg");
const lightBulbOffSvg = btnDarkMode.querySelector("svg#lightBulbOffSvg");

btnDarkMode.addEventListener("click", () => {
  const body = document.querySelector("body");
  const isDarkModeActive = btnDarkMode.classList.contains("active");

  if(!isDarkModeActive) {
    toggleBgDarkClass(body);
		toggleDNoneClass(lightBulbOffSvg);
		toggleDNoneClass(lightBulbSvg);
		toggleActiveClass(btnDarkMode);
  }

  else {
    toggleBgDarkClass(body);
    toggleDNoneClass(lightBulbSvg);
    toggleDNoneClass(lightBulbOffSvg);
    toggleActiveClass(btnDarkMode);
  };
  
  function toggleBgDarkClass(element) {
    element.classList.toggle("bg-dark");
  };
  
  function toggleDNoneClass(element) {
    element.classList.toggle("d-none");
  };
  
  function toggleActiveClass(element) {
    element.classList.toggle("active");
  };
});

// Dark mode end

function createQuestionTitle(questionTitle) {
  const _questionTitle = board.querySelector("#questionTitle");
  _questionTitle.innerText = questionTitle;
};

// Div actions

const divActions = board.querySelector("#actions");
const btnNext = divActions.querySelector("#nextQuestion");
const btnPrevious = divActions.querySelector("#previousQuestion");

btnNext.addEventListener("click", nextQuestion);
btnPrevious.addEventListener("click", previousQuestion);

function createAnswer(letter, answer) {
  const divAnswers = board.querySelector("#answers");
  
  const btnAnswer = createElement("button");
  btnAnswer.classList.add("btn", "btn-lg", "rounded-1");
  btnAnswer.value = letter;
  
  const spanLetter = createElement("span");
  spanLetter.innerText = `${letter})`;
  spanLetter.classList.add("me-1");
  
  const spanText = createElement("span");
  spanText.innerText = answer;
  
  btnAnswer.appendChild(spanLetter);
  btnAnswer.appendChild(spanText);
  divAnswers.appendChild(btnAnswer);
  
  // The Right answer was clicked before
  
  const currentQuestion = getCurrentQuestion();
  const {rightAnswerLetter} = currentQuestion;
  const isRightAnswer = letter == rightAnswerLetter;
  const rightAnswerClickedBefore = currentQuestion.rightAnswerClickedBefore == true;
  
  if(rightAnswerClickedBefore) {
    btnAnswer.setAttribute("disabled", "");
    btnAnswer.style.opacity = "unset";
    
    if(isRightAnswer) {
      addBtnSuccessClass(btnAnswer);
    }
    
    else {
      //btnAnswer.classList.remove("btn-outline-primary");
      addBtnDangerClass(btnAnswer);
    };
  }
  
  else if (!rightAnswerClickedBefore) {
    addBtnOutlinePrimaryClass(btnAnswer);
  };
  
  // Button action
  
  btnAnswer.addEventListener("click", () => {
  	checkAnswer(letter);
  });
};

function checkAnswer(letter) {
  const currentQuestion = getCurrentQuestion();
  const {rightAnswerLetter} = currentQuestion;
  const isRightAnswer = letter == rightAnswerLetter;
  
  if(isRightAnswer) {
    rightAnswer(letter);
  }
  
  else if(!isRightAnswer) {
    wrongAnswer(letter);
  };
};

function rightAnswer(letter) {
  const currentQuestion = getCurrentQuestion();
  const {rightAnswerLetter} = currentQuestion;
  questions[currentQuestionIndex.value].rightAnswerClickedBefore = true;

  nextQuestion();
};

function wrongAnswer(letter) {
  const btnAnswer = board.querySelector(`button[value="${letter}"]`)
  addBtnDangerClass(btnAnswer);
};

function createElement(type) {
  return document.createElement(type);
};

function addBtnOutlinePrimaryClass(element) {
  element.classList.remove("btn-danger", "btn-success");
  element.classList.add("btn-outline-primary");
};

function addBtnDangerClass(element) {
  element.classList.remove("btn-outline-primary", "btn-success");
  element.classList.add("btn-danger");
};

function addBtnSuccessClass(element) {
  element.classList.remove("btn-outline-primary", "btn-danger");
  element.classList.add("btn-success");
};

function addInvisibleClass(id) {
  const element = document.getElementById(id);
  element.classList.add("invisible");
};

function removeInvisibleClass(id) {
  const element = document.getElementById(id);
  element.classList.remove("invisible");
};

// Creating the question

function createQuestion() {
  const currentQuestion = getCurrentQuestion();
  
  // Trocar ESTA LOGICA
  
  const hasMoreQuestion = currentQuestion instanceof Object;
  
  if(hasMoreQuestion) {
    const currentQuestion = getCurrentQuestion();
    const {questionTitle, answers, rightAnswerLetter} = currentQuestion;
    
    createQuestionTitle(questionTitle, rightAnswerLetter);
    
    answersKeys = Object.keys(answers);
    answersKeys.forEach(letter => {
      const answer = answers[letter];
      
      if(answer.length > 0) {
        createAnswer(letter, answer);
      };
    });
  }
  
  else if(!hasMoreQuestion) {
    addInvisibleClass("nextQuestion");
    
    const divAnswers = board.querySelector("#answers");
    const h1 = createElement("h1");;
    h1.innerText = "Parábens! Você chegou ao final do quiz!";
    h1.classList.add("text-success", "text-center");
    
    cleanFields();
    divAnswers.appendChild(h1);
  };
};

function cleanFields() {
  const questionTitle = board.querySelector("#questionTitle");
  questionTitle.innerText = "";
  
  const divAnswers = board.querySelector("#answers");
  divAnswers.innerHTML = "";
};

function getCurrentQuestion() {
  const currentQuestion = questions[currentQuestionIndex.value];

  return currentQuestion;
};

function nextQuestion() {
  cleanFields();
  increaseQuestionIndex();
  createQuestion();
  
  const _isSecondQuestion = currentQuestionIndex.value == 1;
  
  if(_isSecondQuestion) {
    removeInvisibleClass("previousQuestion");
  };
};

function previousQuestion() {
  cleanFields();
  decreaseQuestionIndex();
  createQuestion();
  
  const _isFirstQuestion = isFirstQuestion();
  
  if(_isFirstQuestion) {
    addInvisibleClass("previousQuestion");
  };
  
  const btnNext = board.querySelector("#nextQuestion");
  const isBtnNextInvisible = btnNext.classList.contains("invisible");

  if(isBtnNextInvisible) {
    removeInvisibleClass("nextQuestion");
  };
};

function increaseQuestionIndex() {
  currentQuestionIndex.value++;
};

function decreaseQuestionIndex() {
  if(currentQuestionIndex.value >= 1) {
    currentQuestionIndex.value--;
  };
};

function isFirstQuestion() {
  const _isFirstQuestion = currentQuestionIndex.value == 0;
  
  return _isFirstQuestion;
};

function isLastQuestion() {
  const questionsLength = questions.length;
  const _isLastQuestion = currentQuestionIndex.value == questionsLength - 1;

  return _isLastQuestion;
};

window.addEventListener("load", createQuestion);