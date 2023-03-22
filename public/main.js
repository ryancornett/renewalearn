$(function() {
  $('input[name="class-date"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: false,
    minYear: 1901,
    maxYear: parseInt(moment().format('YYYY'),10)
  }, function(start, end, label) {
    var years = moment().diff(start, 'years');
      console.log(classDate.value)
  });
});

let welcome = document.getElementById('welcome');
let getYouStarted = document.getElementById('started');

async function timedDisplay(changingElement) {
  changingElement.classList.add('revealed');
}

timedDisplay(welcome);
timedDisplay(getYouStarted);

let wordText = document.querySelector(".word-text");
let wordLink = document.getElementById('word-link');

async function getWord() {
  let wordRequest = await fetch('http://localhost:5000/word-of-the-day/');
  let wordResponse = await wordRequest.json();
  return wordResponse;
};

(async function fillWordPanel() {
  let wordPanel = await getWord();
  console.log(wordPanel);
  wordText.innerHTML = `<h4>The Word of the Day is <u>${wordPanel.word}:</u></h4><p><i>${wordPanel.definitions[0].text}</i></p>`;
  wordLink.innerHTML = `<h6><a href='https://www.wordnik.com/words/${wordPanel.word}'>Click here</a> for more on the Word of the Day.</h6>`
})();






const CONTENT_AREA = document.getElementById('content-area');
const QUESTIONS = document.getElementById('question-container');
const DESCRIPTION = document.getElementById('description');
let numberCorrect = 0;
let workOn ="";
function makeSelection(a) {
    const RESULT = document.getElementById('result');
    RESULT.textContent = "";
    
//--Ask question
    CONTENT_AREA.textContent = (quizResponse[a].instructions);
    QUESTIONS.textContent = (quizResponse[a].items[0].question);
    DESCRIPTION.textContent = (quizResponse[a].description);

//     //--Get options container and create ordered list with options.length number of list items with inner button

    const CONTAINER = document.getElementById('options-container');
    const OL = document.createElement('ol');
    OL.setAttribute('type', 'a');
    let buttonElements = document.getElementsByClassName("btn");
    if (buttonElements.length == 0) {
        for (let i = 0; i < quizResponse[a].items[0].options.length; i++) {
            const LI = document.createElement('li');
            LI.innerHTML = '<button class="btn"></button>';
            OL.appendChild(LI);
        }
    }
    CONTAINER.appendChild(OL);

//     // --Add options to buttons

    const OPTIONS = document.querySelectorAll('.btn');
    for (let i = 0; i < OPTIONS.length; i++) {
        OPTIONS[i].innerHTML = "";
        OPTIONS[i].innerHTML = quizResponse[a].items[0].options[i];
    }

//     //--Get result container and add click listeners to populate results container with guess result

    OPTIONS.forEach((answerBtn) => {
        answerBtn.addEventListener('click', () => {
            if (answerBtn.textContent === quizResponse[a].items[0].answer) {
                numberCorrect++;
            } else {
                workOn += quizResponse[a].more;
            }
        });
    });
    console.log(workOn);
};

// const MATH_BUTTON = document.getElementById('math-button');
// MATH_BUTTON.addEventListener('click', () => {
// return makeSelection(0)
// });
// const RLA_BUTTON = document.getElementById('rla-button');
// RLA_BUTTON.addEventListener('click', () => makeSelection(1));

const FIRST_PANEL = document.querySelector('.first-reveal');
const FIRST_FIELDSET = document.getElementById('first-fieldset');
const SECOND_PANEL = document.querySelector('.second-reveal');
const SECOND_FIELDSET = document.getElementById('second-fieldset');
const THIRD_PANEL = document.querySelector('.third-reveal');
let studentName = document.getElementById('name');
let emailAddress = document.getElementById('email');
const NAME_EMAIL_SUBMIT_FORM = document.getElementById('name-email-submit-button');
let usernameError = document.getElementById('username-error');
let emailError = document.getElementById('email-error');

studentName.addEventListener('input', function(e) {
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
  let emailPattern = /^.+@[^\.].*\.[a-z]{2,}$/;
  let currentEmail = e.target.value;
  let validEmail = emailPattern.test(currentEmail);
  if(validEmail) {
    emailError.style.visibility = 'hidden';
    console.log(`Email evaluates to ${validEmail}`);
  } else {
    emailError.style.visibility = 'visible';
  }
})

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
    console.log(userData);
    LAST_ATTENDED.textContent = `Welcome, ${userData[0]}! When did you last attend class?`;
  } else {}
});

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
  console.log(userLastAndInstructor);
  INSTRUCTOR_SUGGESTION.innerHTML = `${userLastAndInstructor[1]} would like you to take one of the following quizzes, <b>${userData[0]}</b>:`;
});

(async function getQuiz() {
  let quizRequest = await fetch('http://localhost:5000/quiz/');
  let quizResponse = await quizRequest.json();
  console.log(quizResponse);
}());

const MODAL_ONE = document.querySelector('.figurative-language');
const MODAL_TWO = document.querySelector('.analogies');
const MODAL_THREE = document.querySelector('.reading-in-context');
const MODAL_FOUR = document.querySelector('.authors-purpose');
let openModalFigurativeLanguage = document.querySelector('.open-modal-figurative-language');
let closeModalFigurativeLanguage = document.querySelector('.close-modal-figurative-language');
let openModalAnalogies = document.querySelector('.open-modal-analogies');
let closeModalAnalogies = document.querySelector('.close-modal-analogies');
let openModalReadingInContext = document.querySelector('.open-modal-reading-in-context');
let closeModalReadingInContext = document.querySelector('.close-modal-reading-in-context');
let openModalAuthorsPurpose = document.querySelector('.open-modal-authors-purpose');
let closeModalAuthorsPurpose = document.querySelector('.close-modal-authors-purpose');

openModalFigurativeLanguage.addEventListener('click', () => {
  MODAL_ONE.showModal();
  console.log('click');
});
closeModalFigurativeLanguage.addEventListener('click', () => {
  MODAL_ONE.close();
  console.log('click');
});

openModalAnalogies.addEventListener('click', () => {
  MODAL_TWO.showModal();
  console.log('click');
});
closeModalAnalogies.addEventListener('click', () => {
  MODAL_TWO.close();
  console.log('click');
});

openModalReadingInContext.addEventListener('click', () => {
  MODAL_THREE.showModal();
  console.log('click');
});
closeModalReadingInContext.addEventListener('click', () => {
  MODAL_THREE.close();
  console.log('click');
});

openModalAuthorsPurpose.addEventListener('click', () => {
  MODAL_FOUR.showModal();
  console.log('click');
});
closeModalAuthorsPurpose.addEventListener('click', () => {
  MODAL_FOUR.close();
  console.log('click');
});