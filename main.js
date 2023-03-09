import {Quiz, ABSOLUTE_VALUE, WORD_PROBLEMS_ONE, WORD_PROBLEMS_TWO, PROBABILITY, FIGURATIVE_LANGUAGE, ANALOGIES, READING_IN_CONTEXT, AUTHORS_PURPOSE} from "./content.js";
import {Student, students} from "./student.js";

console.log(students);



import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

let query = "Figurative Language";
let queries = [];
const GOOGLE_KEY = process.env.GOOGLE_KEY;
async function search() {
  let response = await fetch(`https://www.googleapis.com/customsearch/v1?key= ${GOOGLE_KEY} &cx=a7ac1afd10857474a&q= ${query}`)
  let data = await response.json();
  console.log(data.queries.request[0].title.slice(23));
  queries.push(query);
  console.log(queries);
};
search();

import path from "path";
import url from "url";

// From Paul Sheriff's video on Pluralsight, JS REST APIs: Getting Started

import express from 'express';
let app = express();

let router = express.Router();

router.get('/', function (req, res, next) {
    // res.send('Server is running');
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

import cors from 'cors';
app.use(cors())
// app.get('/', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })
 
// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })