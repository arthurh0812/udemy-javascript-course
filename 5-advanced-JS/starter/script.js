// Function Constructor

/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher',
};

var listening = function() {
    console.log('I am listening');
};

listening.prototype.music = "Pop";

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth);
}
Person.prototype.lastName = 'Smith';
var john = new Person('John', 1990, 'teacher');


// john.calculateAge();

var jane = new Person('Jane', 1997, 'designer');

var mark = new Person('Mark', 1968, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john);
console.log(jane.calculateAge);
console.log(mark.lastName);

john.hasOwnProperty();
Person.hasOwnProperty();

console.log(john.isPrototypeOf());
console.log(mark.hasOwnProperty());
console.log(Person.valueOf());
console.log(john.__proto__ === Person.prototype);

console.log(Array.prototype.values(4, 6).__proto__.__proto__.__proto__);
console.log(john.__proto__.__proto__);
console.log(Person.prototype.__proto__);
console.log(listening.prototype);
console.log(john.__proto__);
*/






// Object.create

/*
var personProto = {
    calculateAge: function() {
        console.log(2020 - this.yearOfBirth);
    },
};

var john = Object.create(personProto, {
    name: { value: 'John' },
    yearOfBirth: { value: 1990 },
    job: { value: 'teacher' },
});

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1998 },
    job: { value: 'designer' },
});

var mike = Object.create(personProto, {
    name: { value: 'Mike' },
    yearOfBirth: { value: 2007 },
    job: { value: 'student' },
});
*/

// Mix of Function Constructors and Object.create()

/*
var Person = function(name, age) {
    this.name = name;
    this.age = age;
    this.canTalk = true;
  };
   
Person.prototype.greet = function() {
    if (this.canTalk) {
        console.log(`Hi, I am ${this.age} years old ${this.name}`);
    }
};
  
var Employee = function(name, age, title) {
    Person.call(this, name, age);
    this.title = title;
};
  
// Create Object containing the Prototype Property of the Person Object and assigning that to the Prototype Property of the Employee Object
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; //If you don't set Object.prototype.constructor to Employee, 
                                             //it will take prototype.constructor of Person (parent). 
                                             //To avoid that, we set the prototype.constructor to Employee (child).
                                             
  
// Overwriting the greet method of the Employee Prototype Property
Employee.prototype.greet = function() {
    if (this.canTalk) {
      console.log(`Hi, I am ${this.age} years old ${this.name}, the ${this.title}`);
    }
};


var Customer = function(name, age) {
    Person.call(this, name, age);
};

  
Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer; 
//If you don't set Object.prototype.constructor to Customer, 
//it will take prototype.constructor of Person (parent). 
//To avoid that, we set the prototype.constructor to Customer (child).
  
  
var Mime = function(name, age, hobby) {
    Person.call(this, name, age);
    this.hobby = hobby;
    if (this.hobby) {this.hasHobby = true;} else {this.hasHobby = false;};
};
  
Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime; 
// If you don't set Object.prototype.constructor to Mime,
// it will take prototype.constructor of Person (parent).
// To avoid that, we set the prototype.constructor to Mime (child).
  
Mime.prototype.greet = function() {
    if (this.canTalk && this.hasHobby) {
        console.log(`Hi, I am ${this.age} years old ${this.name} and I like ${this.hobby}`);
    }
    else if (this.canTalk) {
        console.log(`Hi, I am ${this.age} years old ${this.name}`);
    }
};


var bob = new Employee('Bob', 29, 'Builder');
var joe = new Customer('Joe', 45);
var rg = new Employee('Red Green', 16, 'Handyman');
var mike = new Customer('Mike', 27);
var mime = new Mime('Mime', 57, 'playing football');
  

bob.greet();
    // => Hi, I am 29 years old Bob, the Builder
  
joe.greet();
    // => Hi, I am 45 years old Joe
  
rg.greet();
    // => Hi, I am 16 years old Red Green, the Handyman
  
mike.greet();
    // => Hi, I am 27 years old Mike
  
mime.greet();
    // => Hi, I am 57 years old Mime and I like playing football



function sayName(first, last) {
    console.log(`${first} ${last}`);
    console.log(this);
}

sayName.call(this, 'Domenic', 'Smith');


var Person = function(firstName, lastName, yearOfBirth, job) {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.lastName = lastName;
}

Person.prototype.calculateAge = function() {
    return 2020 - this.yearOfBirth;
}
Person.prototype.species = 'Homo Sapiens';
Person.prototype.height = 180;


var Athlete = function(firstName, lastName, yearOfBirth, olympics, olympicMedals) {
    Person.call(this, firstName, lastName, yearOfBirth);
    this.job = 'athlete';
    this.olympics = olympics;
    this.olympicMedals = olympicMedals;
}

Athlete.prototype = Object.create(Person.prototype);
Athlete.prototype.constructor = Athlete;


var FootballPlayer = function(firstName, lastName, yearOfBirth, olympics, olympicMedals, goals, matches, matchesWon) {
    Athlete.call(this, firstName, lastName, yearOfBirth, olympics, olympicMedals);
    this.job = 'football player';
    this.goals = goals;
    this.matches = matches;
    this.matchesWon = matchesWon;
}

FootballPlayer.prototype = Object.create(Athlete.prototype);
FootballPlayer.prototype.constructor = FootballPlayer;


var john = new Person('John', 'Smith', 1990, 'teacher');
var jane = new Person('Jane', 'Underwood', 1997, 'designer');
var mike = new Athlete('Mike', 'Anderson', 1978, 6, [2, 5, 4, 6, 3]);
var ronaldo = new FootballPlayer('Cristiano', 'Ronaldo', 1987, 3, [5, 11, 15, 14, 12], 999, 2119, 1578);
var mueller = new FootballPlayer('Thomas', 'Müller', 1984, 0, [], 640, 2348, 1345);



console.log(john);

console.log(john.calculateAge());

console.log(mike);

console.log(mike.height);

console.log(ronaldo);

console.log(ronaldo.calculateAge());

console.log(mueller);

console.log(mueller.species);

console.log(mueller.calculateAge());
*/

/********************
Primitives vs Objects
*********************
*/

/*
// *************
// In Variables:
// *************

//(Primitives)//
var a = 23;

var b = a;

a = 50;

console.log(a); // => 50
console.log(b); // => 23

//(Objects)//
var obj1 = {
    name: 'John',
    age: 26,
};

var obj2 = obj1;

obj1.age = 30;
obj2.name = 'Mike';

console.log(obj1); // => .name = "Mike", .age = 30
console.log(obj2); // => .name = "Mike", .age = 30

// *************
// In Functions:
// *************

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon',
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
};

change(age, obj);

console.log(age);
console.log(obj.city);
*/

/*****************************
Passing Functions as Arguments
******************************
*/

/*
var years = [1990, 1965, 1939, 2007, 1997];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2020 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    }
    else if (el < 18 && el > 0) {
        return 'No limit!';
    }
    else if (el > 81) {
        return 'Depends on person';
    }
    else {
        return 'This person is not even born yet!';
    }
}

var ages = arrayCalc(years, calculateAge);

var fullAges = arrayCalc(ages, isFullAge);

var maxHartRates = arrayCalc(ages, maxHeartRate);

console.log(ages);

console.log(fullAges);

console.log(maxHartRates);
*/

/****************************
Functions returning Functions
*****************************
*/

/*
function interviewQuestion(job) {
    function question(name) {
        if (job[0] === 'a' || job[0] === 'e' || job[0] === 'i' || job[0] === 'o' || job[0] === 'u') {
            console.log(`Hi ${name}, how do you feel about being an ${job}?`);
        }
        else {
            console.log(`Hi ${name}, how do you feel about being a ${job}?`);
        }
    }
    if (job === 'designer') {
        return question;
    } 
    else if (job === 'teacher') {
        return question;
    }
    else if (job === 'driver') {
        return question;
    }
    else if (job === 'football player') {
        return question;
    }
    else if (job === 'artist') {
        return question;
    }
    else {
        return function(name) {
            console.log(`Hello ${name}, what do you do?`);
        };
    };
};

interviewQuestion('artist')('Michael');
*/

/**********************************************
IIFE (Immediately Invoked Function Expressions)
***********************************************
*/

/*
function game() {
    var a = Math.random() * 10;
    console.log(a >= 5);    
};

game();

(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);  
})();


(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);  
})(2);
*/

/*******
Closures
********
*/

/*
function retirement(retirementAge) {
    var a = 'years left until retirement.'
    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log(`${retirementAge - age} ${a}`);
    };
};

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

// Using Closure-Functionality at an Example:

function interviewQuestion(job) {
    return function(name) {
        switch (job) {
            case 'designer': 
                console.log(`Hi ${name}, how do you think your job as a ${job} affects the society and if yes, how?`);
                break;
            case 'teacher':
                console.log(`What do you like most about being a ${job}, ${name}?`);
                break;
            case 'driver':
                console.log(`Tell us, ${name}, have you ever had affairs with customers?`);
                break;
            case 'artist':
                console.log(`Hi ${name}, what is your favourite picture and why?`);
                break;
            case 'waitor':
                console.log(`Have you ever wanted to kick a guest out of the restaurant where you were a ${job}, ${name}?`);
                break;
            case 'banker':
                console.log(`Dear Mr. ${job} ${name}, how much Kohle have you earned today?`);
                break;
            default:
                console.log(`Oh, and what exactly are you doing, ${name}?`);
                break;
        };
    };
};

var unknownJobQuestion = interviewQuestion();
var designerQuestion = interviewQuestion('designer');
var teacherQuestion = interviewQuestion('teacher');
var driverQuestion = interviewQuestion('driver');
var artistQuestion = interviewQuestion('artist');
var waitorQuestion = interviewQuestion('waitor');
var bankerQuestion = interviewQuestion('banker');


teacherQuestion('Max');
designerQuestion('Michael');
waitorQuestion('John');
artistQuestion('Supreme');
designerQuestion('Paul');
bankerQuestion('Monchi');
unknownJobQuestion('Jake');
*/

/***************************
Bind, Call and Apply Methods
****************************
*/

/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log(`Good ${timeOfDay}, Ladies and Gentlemen! I'm ${this.name}, ${this.job} and I am ${2020 - this.yearOfBirth} years old.`);
        } else if (style === 'friendly') {
            console.log(`Hey, what's up? I'm ${this.name}, ${this.job} and I am ${2020 - this.yearOfBirth} years old. Have a nice ${timeOfDay}!`);
        }
    },
};

var emily = {
    name: 'Emily',
    yearOfBirth: 1985,
    job: 'designer',
};

john.presentation('friendly', 'afternoon');

// Method Borrowing (Call & Apply)
john.presentation.call(emily, 'formal', 'morning');
john.presentation.apply(emily, ['formal', 'morning']);

// Method Carrying (Bind)
var johnFriendly = john.presentation.bind(john, 'friendly');
var emilyFormal = john.presentation.bind(emily, 'formal');

johnFriendly('midday');
johnFriendly('night');

emilyFormal('afternoon');
emilyFormal('evening');


var years = [1990, 1965, 1939, 2007, 2001];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2020 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullAgeJapan = arrayCalc(ages, isFullAge.bind(this, 20));
var fullAgeGermany = arrayCalc(ages, isFullAge.bind(this, 18));
var fullAgeUS = fullAgeGermany;


console.log(ages);

console.log(fullAgeJapan);
console.log(fullAgeUS);
*/

/*****************
Coding Challenge 7
******************
*/

(function() {

    // Defining the Question Class
    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = this.answers[correctAnswer];
    };

    Question.prototype.display = function() {
        // Log out question
        console.log(this.question);
        // Loop over answers array and log out each answer
        for (var i = 0; i < this.answers.length; i++) {
            console.log(`${i + 1}. ${this.answers[i]}`);
        };
    };

    Question.prototype.checkAnswer = function(number, clbfnc) {
        // Check if the number is a "number" AND the passed in input - 1 (as arrays are 0-based and human brains NOT) is equal to the index of the correct answer
        if (this.answers.indexOf(this.correctAnswer) === number - 1) {
            console.log(`The Answer ${number}:"${this.answers[number - 1]}" is correct!`);
            console.log(`Your Score: ${clbfnc(true)}`);
        }
        // Check if the number is a "number" AND the number is less or equal to the amount of possible answers AND is greater than 0
        else if (number <= this.answers.length && number > 0) {
            console.log(`The Anwer ${number}:"${this.answers[number - 1]}" is not correct; it would have been answer ${this.answers.indexOf(this.correctAnswer) + 1}:"${this.correctAnswer}".`);
            console.log(`Your Score: ${clbfnc(false)}`);
        }
        // Case of pressing ENTER or OK
        else if (number === ""){
            console.log(`Your Score: ${clbfnc(false)}`);
        }
        // Check if number is too great OR too small OR if no number was inserted OR if the number is NOT of the data type 'number'
        else if (typeof number !== "number" || number > this.answers.length || number <= 0) {
            console.log(`It would have been answer ${this.answers.indexOf(this.correctAnswer) + 1}:"${this.correctAnswer}".`);
            console.log(`Your Score: ${clbfnc(false)}`);
        }
    };
    
    // Setting up 4 questions with a individual reference to each question
    var question1 = new Question('What is the teacher\'s name of the course?', ['John', 'Jon', 'Jonas', 'Johnson'], 2);
    var question2 = new Question('What is the the most used text editor in 2020?', ['Atom', 'VSCode', 'Sublime Text', 'Notepad++'], 1);
    var question3 = new Question('The tallest building in the world is located in which city?', ['New Dheli', 'New York', 'Dubai', 'Tokyo'], 2);
    var question4 = new Question('Name the longest river in the UK.', ['River Thames', 'River Great Ouse', 'River Trent', 'River Severn'], 3);
    
    // Storing question references in an array
    const questions = [question1, question2, question3, question4];

    // Using a function to either add 1 to the score or don't do anything (Use of Closures)
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        };
    };

    var keepScore = score();

    // Next Question
    function nextQuestion() {
        // Creating a random number between 0 and 3 (inclusive)
        var n = Math.floor(Math.random() * questions.length);

        // Using the random number to pick a random question from the questions array
        var currQuestion = questions[n];

        // show()-method of the picked question object
        currQuestion.display();

        var input = prompt(`${currQuestion.question} 
        Use the number for the correct Answer:`);

        // Only show next answer and score etc if the user didn't press CANCEL AND didn't type in "exit"
        if (input !== 'exit' && input !== null) {
            // check()-method of the picked question object
            currQuestion.checkAnswer(input, keepScore);

            console.log(`-----------------------------------------------------------------------------------------------------`);

            nextQuestion();
        };
    }

    nextQuestion();
})();



