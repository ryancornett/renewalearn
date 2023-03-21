import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import path from "path";
import url from "url";

import express from 'express';
let app = express();
import cors from 'cors';
app.use(cors())
let router = express.Router();

router.get('/api', function (req, res, next) {
    res.send('Server is running');
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    res.sendFile(__dirname + '/public/index.html')
});



function createQuiz() {
  class Quiz {
    constructor(instructions, description, type, more, items = []) {
        this.instructions = instructions;
        this.description = description;
        this.type = type;
        this.more = more;
        this.items = items;
    }
  }

  const FIGURATIVE_LANGUAGE = new Quiz("Select the type of figurative language used in each sentence.",
    'According to Merriam-Webster, "Figurative language refers to words or phrases that are meaningful, but not literally true. If you say \'that news hit me like a ton of bricks,\' you are using figurative language..."',
    "<h4>Figurative Language: </h4><p>Further practice can be found <a href=\"https://www.ixl.com/ela/figurative-language\"> here</a>.</p>",
    [{
    id: "035",
    question: "The baby cow was as big as a house.",
    image: null,
    caption: null,
    options: ["Simile", "Metaphor", "Hyperbole", "Personification"],
    answer: "Hyperbole"
    },
    {
    id: "036",
    question: "Her smile was as sweet as sunshine on a rainy day.",
    image: null,
    caption: null,
    options: ["Simile", "Metaphor", "Hyperbole", "Personification"],
    answer: "Simile"
    },
    {
    id: "037",
    question: "The raindrops danced along the window pane.",
    image: null,
    caption: null,
    options: ["Simile", "Metaphor", "Hyperbole", "Personification"],
    answer: "Personification"
    },
    {
    id: "038",
    question: "The woman gave a huge donation to the church because she had a heart of gold.",
    image: null,
    caption: null,
    options: ["Simile", "Metaphor", "Hyperbole", "Personification"],
    answer: "Metaphor"
    },
    {
    id: "039",
    question: "The apartment was so dirty that you would need a HazMat suit to enter it.",
    image: null,
    caption: null,
    options: ["Simile", "Metaphor", "Hyperbole", "Personification"],
    answer: "Hyperbole"
    },
    {
    id: "040",
    question: "The kitten played as quietly as a dormouse.",
    image: null,
    caption: null,
    options: ["Simile", "Metaphor", "Hyperbole", "Personification"],
    answer: "Simile"
    },
    {
    id: "041",
    question: "The wooden table was as solid as a rock.",
    image: null,
    caption: null,
    options: ["Simile", "Metaphor", "Hyperbole", "Personification"],
    answer: "Simile"
    }
  ]);

  const ANALOGIES = new Quiz("Select the analogy most closely related to the given analogy.",
    'According to Merriam-Webster, an analogy is "a comparison of two otherwise unlike things based on resemblance of a particular aspect."',
    "<h4>Analogy: </h4><p>Further practice can be found <a href=\"https://www.ixl.com/search?q=analogy&filters=%7B%22subject%22%3A%22Language+arts%22%2C%22gradeIds%22%3A%5B7%2C8%2C9%2C10%2C11%2C12%5D%7D\"> here</a>.</p>",
    [{
    id: "042",
    question: "Dull is to vibrant as:",
    image: null,
    caption: null,
    options: ["huge is to gigantic", "barking is to dogs", "clarity is to liquid", "bored is to enthusiastic"],
    answer: "bored is to enthusiastic"
    },
    {
    id: "043",
    question: "Rock is to heavy as:",
    image: null,
    caption: null,
    options: ["car is to fast", "feather is to light", "large is to giant", "rich is to poor"],
    answer: "Simile"
    },
    {
    id: "044",
    question: "Ringing is to telephone as:",
    image: null,
    caption: null,
    options: ["dinging is to timer", "purple is to grape", "sleep is to humans", "crawling is to babies"],
    answer: "dinging is to timer"
    },
    {
    id: "045",
    question: "Meowing is to cats as:",
    image: null,
    caption: null,
    options: ["sleeping is to babies", "roaring is to lions", "noisy is to races", "flash is to lightning"],
    answer: "roaring is to lions"
    },
    {
    id: "046",
    question: "Water is to liquid as:",
    image: null,
    caption: null,
    options: ["salt is to the ocean", "music is to the radio", "solid is to bread", "tall is to giraffe"],
    answer: "solid is to bread"
    },
    {
    id: "047",
    question: "Blue is to sky as:",
    image: null,
    caption: null,
    options: ["room is to paint", "friend is to foe", "pencil is to write", "brown is to dirt"],
    answer: "brown is to dirt"
    },
    {
    id: "048",
    question: "Brightness is to my eyes as:",
    image: null,
    caption: null,
    options: ["shrills are to my ears", "walking is to my feet", "hair is to my head", "food is to my mouth"],
    answer: "shrills are to my ears"
    },
    {
    id: "049",
    question: "Tree is to climb as:",
    image: null,
    caption: null,
    options: ["foot is to toe", "big is to little", "ocean is to swim", "hand is to write"],
    answer: "ocean is to swim"
    }
  ]);

  const READING_IN_CONTEXT = new Quiz("Read the sentence and select the meaning of the word that is all UPPERCASE.",
    "When you encounter unfamiliar words, you can use synonyms as context clues to help determine the words' meanings. Synonyms are words with the same, or nearly the same, meaning.", "<h4>Reading in Context: </h4><p>Further practice can be found <a href=\"https://www.ixl.com/ela/context-clues\"> here</a>.</p>",
    [{
    id: "050",
    question: "The tough task was filled with INHERENT danger.",
    image: null,
    caption: null,
    options: ["overflowing", "built-in", "combined", "external"],
    answer: "built-in"
    },
    {
    id: "051",
    question: "The COUNTERFEIT money was not accepted at the retailer.",
    image: null,
    caption: null,
    options: ["fake", "important", "thick", "repulsive"],
    answer: "fake"
    },
    {
    id: "052",
    question: "Even though a storm had just come through, the lake was strangely very PLACID that afternoon.",
    image: null,
    caption: null,
    options: ["wild", "rough", "calm", "wet"],
    answer: "calm"
    },
    {
    id: "053",
    question: "Please NULLIFY our agreement; I am not interested anymore.",
    image: null,
    caption: null,
    options: ["improve", "seal", "cancel", "sign"],
    answer: "cancel"
    },
    {
    id: "054",
    question: "The bin in the cellar is REPLETE with potatoes; we will not run out of food this winter.",
    image: null,
    caption: null,
    options: ["empty", "crooked", "hungry", "full"],
    answer: "full"
    },
    {
    id: "055",
    question: "The LACERATION on the boy's finger was not too bad--it only needed two stitches",
    image: null,
    caption: null,
    options: ["bruise", "cut", "blood", "lash"],
    answer: "cut"
    },
    {
    id: "056",
    question: "I have a PLETHORA of questions about how to bake cookies as good as Samantha's.",
    image: null,
    caption: null,
    options: ["scarcity", "enough", "shortfall", "excess"],
    answer: "excess"
    },
    {
    id: "057",
    question: "Sitting in study hall all day is TEDIOUS.",
    image: null,
    caption: null,
    options: ["fun", "hard", "exciting", "boring"],
    answer: "boring"
    }
  ]);

  const AUTHORS_PURPOSE = new Quiz("Read each of the following paragraphs and determine whether the author's purpose in to persuade, inform, or entertain.",
    "An author may write to provide interesting or important information, entertain readers with tales of fiction, or attempt to convince readers to adopt a particular point of view or to do something they otherwise might not.", "<h4>Author's Purpose: </h4><p>Further practice can be found <a href=\"https://www.ixl.com/search?q=authors+purpose&filters=%7B%22subject%22%3A%22Language+arts%22%2C%22gradeIds%22%3A%5B7%2C8%2C9%2C10%2C11%2C12%5D%7D\"> here</a>.</p>",
    [{
    id: "058",
    question: "It was a glorious morning in Alabama. The sun was shining through the trees. Alan couldn't wait to find his fishing pole and call his friend Sam to go fishing. They had a great time on these early morning fishing trips. They took their dogs with them and the dogs would swim in the lake while they fished. It was so fun to watch those pups paddle around the lake.",
    image: null,
    caption: null,
    options: ["Persuade", "Inform", "Entertain"],
    answer: "Entertain"
    },
    {
    id: "059",
    question: "The Slim-O-Matic 5000 will help you to shed pounds and lose inches from your body in only one month. This amazing machine helps you to exercise correctly, and an easy instructional video to show you the proper way to exercise is included. Send $75.99 and begin exercising today.",
    image: null,
    caption: null,
    options: ["Persuade", "Inform", "Entertain"],
    answer: "Persuade"
    },
    {
    id: "060",
    question: "The Underground Railroad was a secret organization which helped slaves escape to freedom. Many slaves were able to escape because of the conductors and station masters. The northern states were free states and slaves were free once they arrived in northern territory. Secret codes and signals were used to identify te conductors and station masters.",
    image: null,
    caption: null,
    options: ["Persuade", "Inform", "Entertain"],
    answer: "Inform"
    },
    {
    id: "061",
    question: "The Bell County Historical Society will host a production at the Bell Theatre that takes a look back at the 100-year anniversary of the events that have shaped this part of Appalachia and one of the lesser-recognized players in the Coal Wars in Harlan County.",
    image: null,
    caption: null,
    options: ["Persuade", "Inform", "Entertain"],
    answer: "Inform"
    },
    {
    id: "062",
    question: "At that sound the bent shape of the king sprang suddenly erect. Tall and proud he seemed again; and rising in his stirrups he cried in a loud voice, more clear than any there had ever heard a mortal man achieve before\: Arise, arise, Riders of Théoden! Fell deeds awake: fire and slaughter! spear shall be shaken, shield be splintered, a sword-day, a red day, ere the sun rises! Ride now, ride now! Ride to Gondor!",
    image: null,
    caption: null,
    options: ["Persuade", "Inform", "Entertain"],
    answer: "Entertain"
    },
    {
    id: "063",
    question: "Keeping warm is no mean feat when the merciless chills of winter start creeping in. You can clutch onto a smelly hot water bottle that'll be cold in less than an hour; shuffle round in a pair of slippers, layer on a multitude of hats and scarves or just give up and crawl back into bed. Now a distinctly more toasty solution has popped up\:the Toast Heated Pillow. Snuggle and squeeze this super-sized (and very smiley) slice and he'll keep you nice and cosy for up to 4 hours.",
    image: null,
    caption: null,
    options: ["Persuade", "Inform", "Entertain"],
    answer: "Persuade"
    }
  ]);
let quizArray = [FIGURATIVE_LANGUAGE, ANALOGIES, READING_IN_CONTEXT, AUTHORS_PURPOSE];
return quizArray;
};





router.get('/quiz', function (req, res, next) {
  res.send(createQuiz());
  // res.send('hello world');
});

app.use(router);
app.use("/public", express.static("./public"));

app.listen(5000, function () {
    console.log('Node server is running on http://localhost:5000..');
})






import axios from "axios";
const WORDNIK_KEY = process.env.WORDNIK_KEY;



let wordOfTheDay = {
  method: 'GET',
  url: `https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${WORDNIK_KEY}`
};

router.get('/word-of-the-day', function (req, res, next) {
  axios.request(wordOfTheDay).then(function (responseWord) {
    res.send(responseWord.data);
  }).catch(function (error) {
    console.error(error);
  });
});

// router.get('/quiz', function (req, res, next) {
//     res.send(WORD_PROBLEMS_ONE);
// });
