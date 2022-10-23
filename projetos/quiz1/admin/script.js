const letters = ["a", "b", "c", "d", "e"];
const question = {
  questionTitle: "",
  answers: {
    "a": "",
    "b": "",
    "c": "",
    "d": "",
    "e": ""
  },
  rightAnswerLetter: "",
  rightAnswerClickedBefore: false
};

const divAnswers = document.querySelector("#divAnswers");
let divAddAnswer = divAnswers.querySelector("#divAddAnswer");
let btnAddAnswer = divAnswers.querySelector("#addAnswer");

// Editing question

const questionTitle = document.querySelector("#question");
questionTitle.addEventListener("input", () => {
  const {value} = questionTitle;
  
  editQuestion(value);
});

const newDivAddAnswer = `
<div id="divAddAnswer" class="mt-3">
  <button type="button" class="btn btn-primary" id="addAnswer">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"></path>
    </svg>
    Adicionar resposta
  </button>
</div>`;

function getOptionAndLetter() {
  let option = "";
  
  letter = letters[0];
  letterUpperCase = letter.toUpperCase();
  option += `<option value="${letter}" selected multiple>${letterUpperCase}</option>`;
  
  letters.splice(letter, 1);
  
  return {option, letter};
};

btnAddAnswer.addEventListener("click", () => {
  addAnswer();
});

function addAnswer() {
  const hasAnotherLetter = letters.length > 0;
  let option, letter;

	if(hasAnotherLetter) {
		const isTheLastLetter = letters.length == 1;
		const optionAndLetter = getOptionAndLetter();
		option = optionAndLetter.option;
		letter = optionAndLetter.letter;
		
		const newDivAnswer = `
		<div class="form-group d-flex mt-3 align-items-center" id="divAnswer">
		  <select class="form-select w-auto px-3 text-primary" aria-label="Default select example" disabled>
		    ${option}
		  </select>
			<input type="text" class="form-control ms-1 answer" letter="${letter}" placeholder="Resposta"/>
		</div>`;
		
	  divAnswers.removeChild(divAddAnswer);
	  divAnswers.innerHTML += newDivAnswer;
	  if(!isTheLastLetter) {
	    divAnswers.innerHTML += newDivAddAnswer;
	    
  	  divAddAnswer = divAnswers.querySelector("#divAddAnswer");
  	  btnAddAnswer = divAnswers.querySelector("#addAnswer");
	  	
  	  btnAddAnswer.addEventListener("click", () => {
  	    addAnswer();
  	  });
	  };
	  
	  const selectRightAnswer = document.querySelector("#rightAnswer select");
	  selectRightAnswer.innerHTML += option.replace("selected multiple", "");
	  
	  // Editing answer
	  
	  const inputAnswers = document.querySelectorAll("div input.answer");
	  inputAnswers.forEach(inputAnswer => {
      inputAnswer.addEventListener("input", () => {
        const {value} = inputAnswer;
        const letter = inputAnswer.getAttribute("letter");
        
        editAnswer(letter, value);
      });
	  });
	  
	  // Editing the right answer.
	  
	  selectRightAnswer.addEventListener("change", () => {
	    const rightAnswerLetter = selectRightAnswer.value;
	    question["rightAnswerLetter"] = rightAnswerLetter;
	  });
	};
};

// Adding the answer "a" by default.
addAnswer();

// Copy to clipboard

const btnCopyToClipboard = document.querySelector("#copyToClipboard");
btnCopyToClipboard.addEventListener("click", () => {
  const copyText = document.createElement("textarea");
  copyText.innerHTML = JSON.stringify(question, null, 2);
  copyText.classList.add("d-none");
  document.body.appendChild(copyText);
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.innerText + ",");
});

// Function to edit question and answer and edit the right answer
 
function editQuestion(value) {
  question["questionTitle"] = value    ;
};

function editAnswer(letter, answer) {
  question["answers"][letter] = answer;
};

function editRightAnswer(rightAnswerLetter) {
  question = {rightAnswerLetter};
};
