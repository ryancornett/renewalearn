import {Quiz, ABSOLUTE_VALUE, FIGURATIVE_LANGUAGE} from "./content.js";

let quizzes = [ABSOLUTE_VALUE, FIGURATIVE_LANGUAGE];

let a = 0;

function makeSelection(a) {
    console.log(`This ${a} is quite bizarre`);
    let test = 1;
    test++;
    console.log(test);

    //--Ask question

    const QUESTIONS = document.getElementById('question-container');
    QUESTIONS.textContent = "";
    QUESTIONS.textContent = (quizzes[a].items[0].question);

    //--Get options container and create ordered list with options.length number of list items with inner button

    const CONTAINER = document.getElementById('options-container');
    const OL = document.createElement('ol');
    OL.setAttribute('type', 'a');
    for (let i = 0; i < quizzes[a].items[0].options.length; i++) {
        const LI = document.createElement('li');
        LI.innerHTML = '<button class="btn"></button>';
        OL.appendChild(LI);
    }
    CONTAINER.appendChild(OL);

    //--Add options to buttons

    const OPTIONS = document.querySelectorAll('.btn');
    for (let i = 0; i < OPTIONS.length; i++) {
        OPTIONS[i].innerHTML = "";
        OPTIONS[i].innerHTML = quizzes[a].items[0].options[i];
    }

    //--Get result container and add click listeners to populate results container with guess result

    const RESULT = document.getElementById('result');

    OPTIONS.forEach((answerBtn) => {
        answerBtn.addEventListener('click', () => {
            if (answerBtn.textContent === quizzes[a].items[0].answer) {
                RESULT.style = ('color: #006400;');
                RESULT.textContent = ("Correct!");
            } else if (RESULT.textContent === ("Try again!")) {
                RESULT.style = ('color: #c49102;');
                RESULT.textContent = ("Keep trying!");
            } else {
                RESULT.style = ('color: #ff3300;');
                RESULT.textContent = ("Try again!");
            }
        });
    });
}

// const MATH_BUTTON = document.getElementById('math-button');
// MATH_BUTTON.addEventListener('click', makeSelection(0));

const RLA_BUTTON = document.getElementById('rla-button');
RLA_BUTTON.addEventListener('click', makeSelection(1));

//--Insert daily fact from API

'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en'

//--Disable buttons when not necessary

(function navButtons() {
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');
    let pageNumber = document.getElementById('page-number');
    if (pageNumber.textContent === 'Page one') {
        prev.setAttribute("disabled", "");
    } else if (pageNumber === 'Last page') {
        next.setAttribute("disabled", "");
    } else{}
}());

