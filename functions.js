let quizzes = [ABSOLUTE_VALUE, WORD_PROBLEMS_ONE, WORD_PROBLEMS_TWO, PROBABILITY, FIGURATIVE_LANGUAGE, ANALOGIES, READING_IN_CONTEXT, AUTHORS_PURPOSE];
const CONTENT_AREA = document.getElementById('content-area');
const QUESTIONS = document.getElementById('question-container');
const DESCRIPTION = document.getElementById('description');
let numberCorrect = 0;
let workOn ="";
function makeSelection(a) {
    const RESULT = document.getElementById('result');
    RESULT.textContent = "";
    
    //--Ask question
    CONTENT_AREA.textContent = (quizzes[a].instructions);
    QUESTIONS.textContent = (quizzes[a].items[0].question);
    DESCRIPTION.textContent = (quizzes[a].description);

    //--Get options container and create ordered list with options.length number of list items with inner button

    const CONTAINER = document.getElementById('options-container');
    const OL = document.createElement('ol');
    OL.setAttribute('type', 'a');
    let buttonElements = document.getElementsByClassName("btn");
    if (buttonElements.length == 0) {
        for (let i = 0; i < quizzes[a].items[0].options.length; i++) {
            const LI = document.createElement('li');
            LI.innerHTML = '<button class="btn"></button>';
            OL.appendChild(LI);
        }
    }
    CONTAINER.appendChild(OL);

    // --Add options to buttons

    const OPTIONS = document.querySelectorAll('.btn');
    for (let i = 0; i < OPTIONS.length; i++) {
        OPTIONS[i].innerHTML = "";
        OPTIONS[i].innerHTML = quizzes[a].items[0].options[i];
    }

    //--Get result container and add click listeners to populate results container with guess result

    OPTIONS.forEach((answerBtn) => {
        answerBtn.addEventListener('click', () => {
            if (answerBtn.textContent === quizzes[a].items[0].answer) {
                numberCorrect++;
            } else {
                workOn += quizzes[a].more;
            }
        });
    });
    console.log(workOn);
};

const MATH_BUTTON = document.getElementById('math-button');
MATH_BUTTON.addEventListener('click', () => {
return makeSelection(0)
});
const RLA_BUTTON = document.getElementById('rla-button');
RLA_BUTTON.addEventListener('click', () => makeSelection(1));

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
}())

let FNAME = document.getElementById('fname');
let LNAME = document.getElementById('lname');
const SUBMIT_FORM = document.getElementById('submit-button');
SUBMIT_FORM.addEventListener('click', () => {
    let fName = FNAME.value;
    let lName = LNAME.value;
    let usernameSetup = fName.slice(0, 2).toLowerCase() + lName.toLowerCase();
    let usernameAffix = Math.floor(Math.random() * 1000);
    let newStudent = new Student ("302", fName, lName, "Lipps", usernameSetup + usernameAffix, "clay123", ["false", "true"])
    students.push(newStudent);
    // window.location.href = 'quiz.html';
    console.log(students);
})


let classDate = document.getElementById('class-date');

$(function() {
    $('input[name="class-date"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: false,
      minYear: 1901,
      maxYear: parseInt(moment().format('YYYY'),10)
    }, function(start, end, label) {
      var years = moment().diff(start, 'years');
    //   alert("You are " + years + " years old!");
        console.log(classDate.value)
    });
  });



const position = { x: 0, y: 0 }

interact('.draggable').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})

// Form validation using /^([A-Z]{1})([a-z]{0,15})\b$/gm

const regex = /^([A-Z]{1})([a-z]{0,15})\b$/gm;

// Alternative syntax using RegExp constructor
// const regex = new RegExp('^([A-Z]{1})([a-z]{0,15})\\b$', 'gm')

const str = ``;
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}

const SEARCH = document.getElementById('search');
let searchValue = SEARCH.value;
const GOOGLE_KEY = process.env.GOOGLE_KEY;
async function search() {
  let response = await fetch(`https://www.googleapis.com/customsearch/v1?key= ${GOOGLE_KEY} &cx=a7ac1afd10857474a&q=lectures`)
  let data = await response.json();
  console.log(data.queries.request[0].title.slice(23));
};

search();