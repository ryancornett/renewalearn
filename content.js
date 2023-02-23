class Quiz {
    constructor(instructions, description, more, items = []) {
        this.instructions = instructions;
        this.description = description;
        this.more = more;
        this.items = items;
    }
}

const ABSOLUTE_VALUE = new Quiz("Answer the following questions independently.", "Description here.", "Further practice, lesson, and/or study links here.",
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
    answer: "16"
    }]);

const FIGURATIVE_LANGUAGE = new Quiz("Select the type of figurative language used in each sentence.",
    'According to Merriam-Webster, "Figurative language refers to words or phrases that are meaningful, but not literally true. If you say \'that news hit me like a ton of bricks,\' you are using figurative language..."',
    "Further practice, lesson, and/or study links here.",
    [{
    id: "005",
    question: "The baby cow was as big as a house",
    image: null,
    caption: null,
    options: ["Simile", "Metaphor", "Hyperbole", "Personification"],
    answer: "Hyperbole"
    },
    {
    id: "006",
    question: "What does the absolute value of a number indicate?",
    image: null,
    caption: null,
    options: ["Simile", "Metaphor", "Hyperbole", "Personification"],
    answer: "Its distance from zero (0) on the number line."
    },
    {
    id: "007",
    question: "14 - |-10| =",
    image: null,
    caption: null,
    options: ["Simile", "Metaphor", "Hyperbole", "Personification"],
    answer: "4"
    },
    {
    id: "008",
    question: "|-8| + |12 - 4| =",
    image: null,
    caption: null,
    options: ["Simile", "Metaphor", "Hyperbole", "Personification"],
    answer: "16"
}]);

export {Quiz, ABSOLUTE_VALUE, FIGURATIVE_LANGUAGE};