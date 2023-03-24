// Begin welcome messages

let welcome = document.getElementById('welcome');
let getYouStarted = document.getElementById('started');

async function timedDisplay(changingElement) {
  changingElement.classList.add('revealed');
}

timedDisplay(welcome);
timedDisplay(getYouStarted);

let wordText = document.querySelector(".word-text");
let wordLink = document.getElementById('word-link');

// End welcome messages



// Begin name and email form fields

let studentName = document.getElementById('name');
let emailAddress = document.getElementById('email');
const NAME_EMAIL_SUBMIT_FORM = document.getElementById('name-email-submit-button');
let usernameError = document.getElementById('username-error');
let emailError = document.getElementById('email-error');

studentName.addEventListener('input', function(e) {
  getYouStarted.style.opacity = '0'; 
  welcome.style.opacity = '0';
  let namePattern = /^([A-Z]{1}[a-z]{1,})$|^([A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,})$|^([A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,})$|^$/;
  let currentName = e.target.value;
  let validName = namePattern.test(currentName);
  if(validName) {
    usernameError.style.visibility = 'hidden';
  } else {
    usernameError.style.visibility = 'visible';
  }
})

emailAddress.addEventListener('input', function(e) {
  getYouStarted.setAttribute('opacity', '0'); 
  welcome.setAttribute('opacity', '0');
  let emailPattern = /^.+@[^\.].*\.[a-z]{2,}$/;
  let currentEmail = e.target.value;
  let validEmail = emailPattern.test(currentEmail);
  if(validEmail) {
    emailError.style.visibility = 'hidden';
  } else {
    emailError.style.visibility = 'visible';
  }
})

// End name and email form fields



// Begin logic to display and run three initial panels (1. name and email; 2. date and instructor; 3. select quiz)

const FIRST_PANEL = document.querySelector('.first-reveal');
const FIRST_FIELDSET = document.getElementById('first-fieldset');
const SECOND_PANEL = document.querySelector('.second-reveal');
function checkNameSubmit() {
  let userName = studentName.value;
  let userEmail = emailAddress.value;
  let userInput = [userName, userEmail];
  FIRST_PANEL.style.opacity = '25%';
  SECOND_PANEL.style.visibility = 'visible';
  FIRST_FIELDSET.setAttribute('disabled', 'true');
  return userInput;
};

const LAST_ATTENDED = document.querySelector('.last-attended');
NAME_EMAIL_SUBMIT_FORM.addEventListener('click', function() {
  if ((studentName.value != '') && (emailAddress.value != '') && (usernameError.style.visibility == 'hidden') && (emailError.style.visibility == 'hidden')) {
    checkNameSubmit();
    let userData = checkNameSubmit();
    LAST_ATTENDED.textContent = `Welcome, ${userData[0]}! When did you last attend class?`;
  } else {}
});

    // Begin calendar date picker

$(function() {
  $('input[name="class-date"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: false,
    minYear: 1901,
    maxYear: parseInt(moment().format('YYYY'),10)
  }, function(start, end, label) {
    var years = moment().diff(start, 'years');
  });
});

    // End calendar date picker

    // Begin logic to check form fields and shift to second panel

const SECOND_FIELDSET = document.getElementById('second-fieldset');
const THIRD_FIELDSET = document.getElementById('third-fieldset');
const THIRD_PANEL = document.querySelector('.third-reveal');
let classDate = document.getElementById('class-date');
const INSTRUCTOR = document.getElementById('instructor');
function checkInstructorSubmit() {
  if (INSTRUCTOR.value != 'initial') {
      let lastDate = classDate.value;
      let userInstructor = INSTRUCTOR.value;
      let userSelections = [lastDate, userInstructor];
      SECOND_PANEL.style.opacity = '25%';
      THIRD_PANEL.style.visibility = 'visible';
      SECOND_FIELDSET.setAttribute('disabled', 'true');
      return userSelections;
  } else {}
}

let DATE_INSTRUCTOR_SUBMIT_FORM = document.getElementById('date-instructor-submit-button');
const INSTRUCTOR_SUGGESTION = document.getElementById('instructor-suggestion');
DATE_INSTRUCTOR_SUBMIT_FORM.addEventListener('click', function() {
  checkInstructorSubmit();
  let userData = checkNameSubmit();
  let userLastAndInstructor = checkInstructorSubmit();
  let userInfo = userData.concat(userLastAndInstructor);
  localStorage.setItem('name-submitted', JSON.stringify(userInfo[0]));
  localStorage.setItem('email-submitted', JSON.stringify(userInfo[1]));
  localStorage.setItem('last-attended', JSON.stringify(userInfo[2]));
  localStorage.setItem('instructor-selected', JSON.stringify(userInfo[3]));
  INSTRUCTOR_SUGGESTION.innerHTML = `${userLastAndInstructor[1]} would like you to take one of the following quizzes, <b>${userData[0]}</b>:`;
});

    // End logic to check form fields and shift to second panel

// End logic to display and run three initial panels (1. name and email; 2. date and instructor; 3. select quiz)



// Begin functionality to display quiz modals

let numberCorrect = 0;
async function getQuiz() {
  let quizRequest = await fetch('http://localhost:5000/quiz/');
  let quizResponse = await quizRequest.json();
  return quizResponse;
};

      // --Add options to buttons
  
const DESCRIPTION = document.querySelectorAll('.description');
const INSTRUCTIONS = document.querySelectorAll('.instructions');
const QUESTIONS_ONE = document.querySelectorAll('.questions-one');
const BTNS_ONE_A = document.querySelectorAll('.one-a')
const BTNS_ONE_B = document.querySelectorAll('.one-b')
const BTNS_ONE_C = document.querySelectorAll('.one-c')
const BTNS_ONE_D = document.querySelectorAll('.one-d')

async function fillQuizOne() {
  let quizzes = await getQuiz();
  DESCRIPTION[0].textContent = (quizzes[0].description);
  INSTRUCTIONS[0].textContent = (quizzes[0].instructions);
  QUESTIONS_ONE[0].textContent = (quizzes[0].items[0].question);
  QUESTIONS_ONE[1].textContent = (quizzes[0].items[1].question);
  QUESTIONS_ONE[2].textContent = (quizzes[0].items[2].question);
  QUESTIONS_ONE[3].textContent = (quizzes[0].items[3].question);
  for (let i = 0; i < BTNS_ONE_A.length; i++) {
    BTNS_ONE_A[i].textContent = quizzes[0].items[0].options[i];
  }
  for (let i = 0; i < BTNS_ONE_B.length; i++) {
    BTNS_ONE_B[i].textContent = quizzes[0].items[1].options[i];
  }
  for (let i = 0; i < BTNS_ONE_C.length; i++) {
    BTNS_ONE_C[i].textContent = quizzes[0].items[2].options[i];
  }
  for (let i = 0; i < BTNS_ONE_D.length; i++) {
    BTNS_ONE_D[i].textContent = quizzes[0].items[3].options[i];
  }
};

let answerArray = [];
function storeAnswer(itemAnswer) {
  answerArray.push(itemAnswer);
  return answerArray;
}

const RESULTS_PANEL = document.querySelector('.results-panel');
let quizResult = document.querySelector('.quiz-result');
function removeThreePanels() {
  FIRST_PANEL.remove();
  SECOND_PANEL.remove();
  THIRD_PANEL.remove();
};

// Fill FIGURATIVE LANGUAGE
const FOOTER = document.querySelector('.footer');
function setFooter() {
  FOOTER.style.position = 'fixed';
  FOOTER.style.bottom = '0';
};
const MODAL_ONE = document.querySelector('.figurative-language');
let openModalFigurativeLanguage = document.querySelector('.open-modal-figurative-language');
let closeModalFigurativeLanguage = document.querySelector('.close-modal-figurative-language');
let submitModalFigurativeLanguage = document.querySelector('.submit-modal-figurative-language');
openModalFigurativeLanguage.addEventListener('click', () => {
  MODAL_ONE.style.display = "block";
  MODAL_ONE.showModal();
  window.setTimeout(function() {
    MODAL_ONE.classList.add('modal-scale');
}, 0.3);
  fillQuizOne();
});
closeModalFigurativeLanguage.addEventListener('click', () => {
  setFooter();
  MODAL_ONE.classList.remove('modal-scale');
  MODAL_ONE.close();
  removeThreePanels();
  let answerValue1 = document.querySelector('input[name="1"]:checked').value;
  let answerValue2 = document.querySelector('input[name="2"]:checked').value;
  let answerValue3 = document.querySelector('input[name="3"]:checked').value;
  let answerValue4 = document.querySelector('input[name="4"]:checked').value;
  storeAnswer(answerValue1);
  storeAnswer(answerValue2);
  storeAnswer(answerValue3);
  storeAnswer(answerValue4);
  numberCorrect = 0;
  for (let b = 0; b < answerArray.length; b++) {
    if (answerArray[b] === 'correct') {
      numberCorrect++;
    }
  }
  localStorage.setItem('correctFigLang', numberCorrect);
  RESULTS_PANEL.style.display = 'block';
  let username = localStorage.getItem('name-submitted');
  let usernameSliced = username.slice(1, -1);
  quizResult.textContent = `${usernameSliced}, you got ${numberCorrect} out of 4 correct.`
});


// Fill ANALOGIES

const QUESTIONS_TWO = document.querySelectorAll('.questions-two');
const BTNS_TWO_A = document.querySelectorAll('.two-a')
const BTNS_TWO_B = document.querySelectorAll('.two-b')
const BTNS_TWO_C = document.querySelectorAll('.two-c')
const BTNS_TWO_D = document.querySelectorAll('.two-d')

async function fillQuizTwo() {
  let quizzes = await getQuiz();
  DESCRIPTION[1].textContent = (quizzes[1].description);
  INSTRUCTIONS[1].textContent = (quizzes[1].instructions);
  QUESTIONS_TWO[0].textContent = (quizzes[1].items[0].question);
  QUESTIONS_TWO[1].textContent = (quizzes[1].items[1].question);
  QUESTIONS_TWO[2].textContent = (quizzes[1].items[2].question);
  QUESTIONS_TWO[3].textContent = (quizzes[1].items[3].question);
  for (let i = 0; i < BTNS_ONE_A.length; i++) {
    BTNS_TWO_A[i].textContent = quizzes[1].items[0].options[i];
  }
  for (let i = 0; i < BTNS_TWO_B.length; i++) {
    BTNS_TWO_B[i].textContent = quizzes[1].items[1].options[i];
  }
  for (let i = 0; i < BTNS_TWO_C.length; i++) {
    BTNS_TWO_C[i].textContent = quizzes[1].items[2].options[i];
  }
  for (let i = 0; i < BTNS_TWO_D.length; i++) {
    BTNS_TWO_D[i].textContent = quizzes[1].items[3].options[i];
  }
};

const MODAL_TWO = document.querySelector('.analogies');
let openModalAnalogies = document.querySelector('.open-modal-analogies');
let closeModalAnalogies = document.querySelector('.close-modal-analogies');
openModalAnalogies.addEventListener('click', () => {
  MODAL_TWO.style.display = "block";
  MODAL_TWO.showModal();
  window.setTimeout(function() {
    MODAL_TWO.classList.add('modal-scale');
}, 0.5);
fillQuizTwo();
});
closeModalAnalogies.addEventListener('click', () => {
  setFooter();
  MODAL_TWO.classList.remove('modal-scale');
  MODAL_TWO.close();
  removeThreePanels();
  let answerValue5 = document.querySelector('input[name="5"]:checked').value;
  let answerValue6 = document.querySelector('input[name="6"]:checked').value;
  let answerValue7 = document.querySelector('input[name="7"]:checked').value;
  let answerValue8 = document.querySelector('input[name="8"]:checked').value;
  storeAnswer(answerValue5);
  storeAnswer(answerValue6);
  storeAnswer(answerValue7);
  storeAnswer(answerValue8);
  numberCorrect = 0;
  for (let b = 0; b < answerArray.length; b++) {
    if (answerArray[b] === 'correct') {
      numberCorrect++;
    }
  }
  localStorage.setItem('correctAnalogies', numberCorrect);
  RESULTS_PANEL.style.display = 'block';
  let username = localStorage.getItem('name-submitted');
  let usernameSliced = username.slice(1, -1);
  quizResult.textContent = `${usernameSliced}, you got ${numberCorrect} out of 4 correct.`
});




const QUESTIONS_THREE = document.querySelectorAll('.questions-three');
const BTNS_THREE_A = document.querySelectorAll('.three-a')
const BTNS_THREE_B = document.querySelectorAll('.three-b')
const BTNS_THREE_C = document.querySelectorAll('.three-c')
const BTNS_THREE_D = document.querySelectorAll('.three-d')
async function fillQuizThree() {
  let quizzes = await getQuiz();
  DESCRIPTION[2].textContent = (quizzes[2].description);
  INSTRUCTIONS[2].textContent = (quizzes[2].instructions);
  QUESTIONS_THREE[0].textContent = (quizzes[2].items[0].question);
  QUESTIONS_THREE[1].textContent = (quizzes[2].items[1].question);
  QUESTIONS_THREE[2].textContent = (quizzes[2].items[2].question);
  QUESTIONS_THREE[3].textContent = (quizzes[2].items[3].question);
  for (let i = 0; i < BTNS_THREE_A.length; i++) {
    BTNS_THREE_A[i].textContent = quizzes[2].items[0].options[i];
  }
  for (let i = 0; i < BTNS_THREE_B.length; i++) {
    BTNS_THREE_B[i].textContent = quizzes[2].items[1].options[i];
  }
  for (let i = 0; i < BTNS_THREE_C.length; i++) {
    BTNS_THREE_C[i].textContent = quizzes[2].items[2].options[i];
  }
  for (let i = 0; i < BTNS_THREE_D.length; i++) {
    BTNS_THREE_D[i].textContent = quizzes[2].items[3].options[i];
  }
};

const MODAL_THREE = document.querySelector('.reading-in-context');
let openModalReadingInContext = document.querySelector('.open-modal-reading-in-context');
let closeModalReadingInContext = document.querySelector('.close-modal-reading-in-context');
openModalReadingInContext.addEventListener('click', () => {
  MODAL_THREE.style.display = "block";
  MODAL_THREE.showModal();
  window.setTimeout(function() {
    MODAL_THREE.classList.add('modal-scale');
}, 0.5);
fillQuizThree();
});
closeModalReadingInContext.addEventListener('click', () => {
  setFooter();
  MODAL_THREE.classList.remove('modal-scale');
  MODAL_THREE.close();
  removeThreePanels();
  let answerValue9 = document.querySelector('input[name="9"]:checked').value;
  let answerValue10 = document.querySelector('input[name="10"]:checked').value;
  let answerValue11 = document.querySelector('input[name="11"]:checked').value;
  let answerValue12 = document.querySelector('input[name="12"]:checked').value;
  storeAnswer(answerValue9);
  storeAnswer(answerValue10);
  storeAnswer(answerValue11);
  storeAnswer(answerValue12);
  numberCorrect = 0;
  for (let b = 0; b < answerArray.length; b++) {
    if (answerArray[b] === 'correct') {
      numberCorrect++;
    };
  }
  localStorage.setItem('correctReading', numberCorrect);
  RESULTS_PANEL.style.display = 'block';
  let username = localStorage.getItem('name-submitted');
  let usernameSliced = username.slice(1, -1);
  quizResult.textContent = `${usernameSliced}, you got ${numberCorrect} out of 4 correct.`
});







const QUESTIONS_FOUR = document.querySelectorAll('.questions-four');
const BTNS_FOUR_A = document.querySelectorAll('.four-a')
const BTNS_FOUR_B = document.querySelectorAll('.four-b')
const BTNS_FOUR_C = document.querySelectorAll('.four-c')
const BTNS_FOUR_D = document.querySelectorAll('.four-d')

async function fillQuizFour() {
  let quizzes = await getQuiz();
  DESCRIPTION[3].textContent = (quizzes[3].description);
  INSTRUCTIONS[3].textContent = (quizzes[3].instructions);
  QUESTIONS_FOUR[0].textContent = (quizzes[3].items[0].question);
  QUESTIONS_FOUR[1].textContent = (quizzes[3].items[1].question);
  QUESTIONS_FOUR[2].textContent = (quizzes[3].items[2].question);
  QUESTIONS_FOUR[3].textContent = (quizzes[3].items[3].question);
  for (let i = 0; i < BTNS_FOUR_A.length; i++) {
    BTNS_FOUR_A[i].textContent = quizzes[3].items[0].options[i];
  }
  for (let i = 0; i < BTNS_FOUR_B.length; i++) {
    BTNS_FOUR_B[i].textContent = quizzes[3].items[1].options[i];
  }
  for (let i = 0; i < BTNS_FOUR_C.length; i++) {
    BTNS_FOUR_C[i].textContent = quizzes[3].items[2].options[i];
  }
  for (let i = 0; i < BTNS_FOUR_D.length; i++) {
    BTNS_FOUR_D[i].textContent = quizzes[3].items[3].options[i];
  }
}

const MODAL_FOUR = document.querySelector('.authors-purpose');
let openModalAuthorsPurpose = document.querySelector('.open-modal-authors-purpose');
let closeModalAuthorsPurpose = document.querySelector('.close-modal-authors-purpose');
openModalAuthorsPurpose.addEventListener('click', () => {
  MODAL_FOUR.style.display = "block";
  MODAL_FOUR.showModal();
  window.setTimeout(function() {
    MODAL_FOUR.classList.add('modal-scale');
}, 0.5);
  fillQuizFour();
});

closeModalAuthorsPurpose.addEventListener('click', () => {
  setFooter();
  MODAL_FOUR.classList.remove('modal-scale');
  MODAL_FOUR.close();
  removeThreePanels();
  let answerValue13 = document.querySelector('input[name="13"]:checked').value;
  let answerValue14 = document.querySelector('input[name="14"]:checked').value;
  let answerValue15 = document.querySelector('input[name="15"]:checked').value;
  let answerValue16 = document.querySelector('input[name="16"]:checked').value;
  storeAnswer(answerValue13);
  storeAnswer(answerValue14);
  storeAnswer(answerValue15);
  storeAnswer(answerValue16);
  numberCorrect = 0;
  for (let b = 0; b < answerArray.length; b++) {
    if (answerArray[b] === 'correct') {
      numberCorrect++;
    }
  }
  localStorage.setItem('correctPurpose', numberCorrect);
  RESULTS_PANEL.style.display = 'block';
  let username = localStorage.getItem('name-submitted');
  let usernameSliced = username.slice(1, -1);
  quizResult.textContent = `${usernameSliced}, you got ${numberCorrect} out of 4 correct.`
});

// End functionality to display quiz modals

function hideModals() {
  MODAL_ONE.style.display = 'none';
  MODAL_TWO.style.display = 'none';
  MODAL_THREE.style.display = 'none';
  MODAL_FOUR.style.display = 'none';
}

MODAL_ONE.addEventListener('close', () => {
  hideModals();
});
MODAL_TWO.addEventListener('close', () => {
  hideModals();
});
MODAL_THREE.addEventListener('close', () => {
  hideModals();
});
MODAL_FOUR.addEventListener('close', () => {
  hideModals();
});

// Begin 'Word of the Day' API call and display

async function getWord() {
  let wordRequest = await fetch('http://localhost:5000/word-of-the-day/');
  let wordResponse = await wordRequest.json();
  return wordResponse;
};

(async function fillWordPanel() {
  let wordPanel = await getWord();
  wordText.innerHTML = `<h4>The Word of the Day is <u>${wordPanel.word}:</u></h4><p><i>${wordPanel.definitions[0].text}</i></p>`;
  wordLink.innerHTML = `<h6><a href='https://www.wordnik.com/words/${wordPanel.word}'>Click here</a> for more on the Word of the Day.</h6>`
})();

// End 'Word of the Day' API call and display