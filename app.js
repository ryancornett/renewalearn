import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import path from "path";
import url from "url";

// From Paul Sheriff's video on Pluralsight, JS REST APIs: Getting Started

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

app.use(router);
app.use("/public", express.static("./public"));

app.listen(5000, function () {
    console.log('Node server is running on http://localhost:5000..');
})
// End of code from Sheriff video







import axios from "axios";
const RAPID_KEY = process.env.RAPID_KEY;
const RAPID_HOST = process.env.RAPID_HOST;
let wordOfTheDay = {
  method: 'GET',
  url: 'https://word-of-the-day2.p.rapidapi.com/word/dc',
  headers: {
    'X-RapidAPI-Key': RAPID_KEY,
    'X-RapidAPI-Host': RAPID_HOST
  }
};

router.get('/word-of-the-day', function (req, res, next) {
  axios.request(wordOfTheDay).then(function (responseWord) {
    res.send(responseWord.data);
  }).catch(function (error) {
    console.error(error);
  });
});

class Quiz {
  constructor(instructions, description, type, more, items = []) {
      this.instructions = instructions;
      this.description = description;
      this.type = type;
      this.more = more;
      this.items = items;
  }
}

const WORD_PROBLEMS_ONE = new Quiz("Answer the following questions independently.", "Word problems force us to become translators--we translate from the language of English to the language of math!", "choice", "<h4>Word Problems: </h4><p>Further practice can be found <a href=\"https://www.ixl.com/search?q=word+problems&filters=%7B%22subject%22%3A%22Math%22%2C%22gradeIds%22%3A%5B5%2C6%5D%7D\"> here</a>.</p>",
    [{
    id: 1,
    question: "Sara, Jessica, Keith, and Sally each have seventeen Pokemon cards. How many Pokemon cards do they have in all?",
    image: null,
    caption: null,
    options: ["17", "68", "34", "32"],
    answer: "68"
    },
    {
    id: 2,
    question: "Nancy has thirty-eight green marbles. Benny has seven times more green marbles than Nancy. How many green marbles does Benny have?",
    image: null,
    caption: null,
    options: ["260", "268", "387", "266"],
    answer: "266"
    },
    {
    id: 3,
    question: "There are thirty-one children in the classroom, and each student will get three pencils and four erasers. How many pencils will the teacher distribute?",
    image: null,
    caption: null,
    options: ["221", "90", "93", "231"],
    answer: "93"
    },
    {
    id: 4,
    question: "Dan has twenty-two books. Sandy has four times as many books as Dan. How many books do both Dan and Sandy have?",
    image: null,
    caption: null,
    options: ["110", "88", "96", "188"],
    answer: "88"
    },
    {
    id: 5,
    question: "Tom saved fourteen quarters over seven days from washing cars. How much money has Tom saved?",
    image: null,
    caption: null,
    options: ["$22.50", "$3.50", "$9.80", "$24.50"],
    answer: "$3.50"
    },
    {
    id: 6,
    question: "There are twenty-six calories in half of a candy bar. How many calories are there in fifteen candy bars?",
    image: null,
    caption: null,
    options: ["708", "780", "780", "870"],
    answer: "780"
    },
    {
    id: 7,
    question: "Jason earns $12.50 per hour cleaning houses. If he works from 8:00 AM to 1:00 PM, how much money will he make?",
    image: null,
    caption: null,
    options: ["$87.50", "$62.05", "$65.20", "$62.50"],
    answer: "$62.50"
    },
    {
    id: 8,
    question: "Sara bought seven dozen eggs from the grocery store to bake some cakes. She plans to bake the cakes over eight days. How many eggs did Sara buy?",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: ""
    },
    {
    id: 9,
    question: "Sara has three dozen golf balls and four are used. How many golf balls does she have?",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: ""
    },
    {
    id: 10,
    question: "There were a total of three baseball games a month, with nine played at night. The season is played over four months. How many games are in the season?",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: "12"
    }
]);

router.get('/quiz', function (req, res, next) {
    res.send(WORD_PROBLEMS_ONE);
});
