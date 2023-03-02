class Quiz {
    constructor(instructions, description, type, more, items = []) {
        this.instructions = instructions;
        this.description = description;
        this.type = type;
        this.more = more;
        this.items = items;
    }
}

const ABSOLUTE_VALUE = new Quiz("Answer the following questions independently.", "The concept of absolute value helps make sense of operations in which negative values are used to determine distances.", "choice", "<h4>Figurative Language: </h4><p>Further practice can be found <a href=\"https://www.ixl.com/search?q=absolute+value&filters=%7B%22subject%22%3A%22Math%22%2C%22gradeIds%22%3A%5B7%2C8%2C20%2C21%5D%7D/figurative-language\"> here</a>.</p>",
    [{
    id: "001",
    question: "What is the value of |-3|?",
    image: null,
    caption: null,
    options: ["-3", "<big>&frac13;</big>", "0", "3"],
    answer: "3"
    },
    {
    id: "002",
    question: "What does the absolute value of a number indicate?",
    image: null,
    caption: null,
    options: ["Its worth to a majority of people.", "Its distance from zero (0) on the number line.", "Its metric measure according to EU standards.", "Its distance from its reciprocal relative to zero (0)."],
    answer: "Its distance from zero (0) on the number line."
    },
    {
    id: "003",
    question: "14 - |-10| =",
    image: null,
    caption: null,
    options: ["4", "24", "7/5", "14/10"],
    answer: "4"
    },
    {
    id: "004",
    question: "|-8| + |12 - 4| =",
    image: null,
    caption: null,
    options: ["0", "24", "8", "16"],
    answer: "16"}
]);

const WORD_PROBLEMS_ONE = new Quiz("Answer the following questions independently.", "Word problems force us to become translators--we translate from the language of English to the language of math!", "choice", "<h4>Word Problems: </h4><p>Further practice can be found <a href=\"https://www.ixl.com/search?q=word+problems&filters=%7B%22subject%22%3A%22Math%22%2C%22gradeIds%22%3A%5B5%2C6%5D%7D\"> here</a>.</p>",
    [{
    id: "005",
    question: "Sara, Jessica, Keith, and Sally each have seventeen Pokemon cards. How many Pokemon cards do they have in all?",
    image: null,
    caption: null,
    options: ["17", "68", "34", "32"],
    answer: "68"
    },
    {
    id: "006",
    question: "Nancy has thirty-eight green marbles. Benny has seven times more green marbles than Nancy. How many green marbles does Benny have?",
    image: null,
    caption: null,
    options: ["260", "268", "387", "266"],
    answer: "266"
    },
    {
    id: "007",
    question: "There are thirty-one children in the classroom, and each student will get three pencils and four erasers. How many pencils will the teacher distribute?",
    image: null,
    caption: null,
    options: ["221", "90", "93", "231"],
    answer: "93"
    },
    {
    id: "008",
    question: "Dan has twenty-two books. Sandy has four times as many books as Dan. How many books do both Dan and Sandy have?",
    image: null,
    caption: null,
    options: ["110", "88", "96", "188"],
    answer: "88"
    },
    {
    id: "009",
    question: "Tom saved fourteen quarters over seven days from washing cars. How much money has Tom saved?",
    image: null,
    caption: null,
    options: ["$22.50", "$3.50", "$9.80", "$24.50"],
    answer: "$3.50"
    },
    {
    id: "010",
    question: "There are twenty-six calories in half of a candy bar. How many calories are there in fifteen candy bars?",
    image: null,
    caption: null,
    options: ["708", "780", "780", "870"],
    answer: "780"
    },
    {
    id: "011",
    question: "Jason earns $12.50 per hour cleaning houses. If he works from 8:00 AM to 1:00 PM, how much money will he make?",
    image: null,
    caption: null,
    options: ["$87.50", "$62.05", "$65.20", "$62.50"],
    answer: "$62.50"
    },
    {
    id: "012",
    question: "Sara bought seven dozen eggs from the grocery store to bake some cakes. She plans to bake the cakes over eight days. How many eggs did Sara buy?",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: ""
    },
    {
    id: "013",
    question: "Sara has three dozen golf balls and four are used. How many golf balls does she have?",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: ""
    },
    {
    id: "014",
    question: "There were a total of three baseball games a month, with nine played at night. The season is played over four months. How many games are in the season?",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: "12"
    }
]);

const WORD_PROBLEMS_TWO = new Quiz("Answer the following questions independently.", "Word problems force us to become translators--we translate from the language of English to the language of math!", "blank", "<h4>Figurative Language: </h4><p>Further practice can be found <a href=\"https://www.ixl.com/search?q=word+problems&filters=%7B%22subject%22%3A%22Math%22%2C%22gradeIds%22%3A%5B7%2C8%5D%7D\"> here</a>.</p>",
    [{
    id: "015",
    question: "Sally had thirty-one peaches left at her roadside fruit stand. She went to the orchard and picked more peaches to stock up the stand. There are now seventy-five peaches at the stand. How many did she pick?",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: "44"
    },
    {
    id: "016",
    question: "After paying nine dollars for a pecan pie, Time has seventy-four dollars left; his friend Abijah has twelve dollars. How much money did Time have before buying the pie?",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: "83"
    },
    {
    id: "017",
    question: "There are nineteen dogwood trees currently in the park. Park workers will plant more dogwood trees today. When the workers are finished there will be seventy-six dogwood trees in the park. How many dogwood trees did the workers plant today?",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: "57"
    },
    {
    id: "018",
    question: "Keith found sixty-five seashells and thirty-six starfishes on the beach. He gave Benny some of each. He has thirty-five seashells left. How many seashells did he give to Benny?",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: "30"
    },
    {
    id: "019",
    question: "Melanie's high school played eighteen soccer games this year and four were at night. The team won most of their games; they were defeated twice. How many games did they win?",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: "16"
    },
    {
    id: "020",
    question: "There were eight red roses and four white roses in the vase. Alyssa cut some more roses from her flower garden. There are now eleven red roses in the vase. How many roses did she cut?",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: "3"
    },
    {
    id: "021",
    question: "How many packs of DVD's can you buy with one hundred seventy-seven dollars if one pack costs sixteen dollars?",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: "11"
    },
    {
    id: "022",
    question: "Abigail is baking cakes. The recipe calls for six cups of flour. She already put in 3 cups. How many more cups does she need to add to have enough batter for two cakes?",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: "9"
    },
    {
    id: "023",
    question: "Veridian Dynamics has large and small ink cartridges in stock. How many ink cartridges can you buy with $184 if the price of one is $18.00?",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: "10"
    },
    {
    id: "024",
    question: "Last week, Kenneth had thirty-five dollars. He washed cars over the weekend and now has fifty-eight dollars. How much money did he make washing cars?",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: "23"
    }
]);

const PROBABILITY = new Quiz("Drag and drop the correct answer into the field.", "In math and science, the probability of an event is a number that indicates how likely the event is to occur.", "drag", "<h4>Probability: </h4><p>Further practice can be found <a href=\"https://www.ixl.com/math/probability-and-statistics\"> here</a>.</p>",
    [{
    id: "025",
    question: "If you spun the spinner one time, what is the probability it would land on a white piece?",
    image: "img/spinner-wheel.svg",
    caption: "A circle-wheel divided into eight equal sections with three white spaces, three brown spaces, and two teal spaces. The colors are distributed in a random manner on the source image.",
    options: ["3 out of 8", "3", "8 in 3", "Neither option"],
    answer: "3 out of 8"
    },
    {
    id: "026",
    question: "",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: ""
    },
    {
    id: "027",
    question: "",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: ""
    },
    {
    id: "028",
    question: "",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: ""
    },
    {
    id: "029",
    question: "",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: ""
    },
    {
    id: "030",
    question: "",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: ""
    },
    {
    id: "031",
    question: "",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: ""
    },
    {
    id: "032",
    question: "",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: ""
    },
    {
    id: "033",
    question: "",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: ""
    },
    {
    id: "034",
    question: "",
    image: null,
    caption: null,
    options: ["", "", "", ""],
    answer: ""
    }
]);

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

export {Quiz, ABSOLUTE_VALUE, WORD_PROBLEMS_ONE, WORD_PROBLEMS_TWO, PROBABILITY, FIGURATIVE_LANGUAGE, ANALOGIES, READING_IN_CONTEXT, AUTHORS_PURPOSE};