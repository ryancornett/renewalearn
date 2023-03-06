class Student {
    constructor(id, first, last, instructor, username, password, results = []) {
        this.id = id;
        this.first = first;
        this.last = last;
        this.instructor = instructor;
        this.username = username;
        this.password = password;
        this.results = results
    }
}

let ryanCornett = new Student (301, "", "", "Lipps", "rcornett8", "clay123", []);

let students = [ryanCornett, null];

export {Student, students};