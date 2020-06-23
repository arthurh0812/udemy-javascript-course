/************
LET AND CONST
*************
*/

/*
// ES5
var name5 = 'Janes Smith';
var age5 = 23;
name5 = 'Jane Miller';

console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
age6 = 25;


// ES5

function driversLicence5 (passedTest) {

    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }

    console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
}

driversLicence5(true);

// ES6

function driversLicence6 (passedTest) {

    let firstName;
    let yearOfBirth = 1990;

    if (passedTest) {
        
        firstName = 'John';
    }

    console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
}

driversLicence6(true);



var i = 26;

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
*/

/***************
BLOCKS AND IIFEs
****************
*/

/*
// ES6

{
    const a = 1;
    let b = 2;
    var c = 3
}

// console.log(a+b);
// console.log(c);


// ES5

(function() {
    var c = 3;
})();

// console.log(c)
*/

/******
STRINGS
*******
*/

/*
let firstName = 'John';

let lastName = 'Smith';

const yearOfBirth = 1990;

function calcAge(year) {
    return 2020 - year;
};

// ES5

console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + ', today he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6

console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}, today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;

n.startsWith('J');
// => boolean
n.endsWith('h');
// => boolean
n.includes('oh');
// => boolean
`${n} `.repeat(10);
// => string
n.search('n');
// => number
n.charAt(6);
// => string
n.charCodeAt(3);
// => number (UNICODE)

n.anchor('title');
// => string (HTML <anchor> ELEMENT WITH SPECIFIED name ATTRIBUTE)
n.big();
// => string (HTML <big> ELEMENT)
n.small();
// => string (HTML <small> ELEMENT)
n.bold();
// => string (HTML <b> ELEMENT)
n.sup();
// => string (HTML <sup> ELEMENT)
n.strike();
// => string (HTML <strike> ELEMENT)
n.italics();
// => string (HTML <i> ELEMENT)
*/



/****************
ARROW FUNCTIONS 1
*****************
*/

/*
const years = [1980, 1965, 1937, 1946];

// ES5

var ages5 = years.map(function(current) {
    return 2020 - current;
})
console.log(ages5);


// ES6

let ages6 = years.map(el => 2020 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}`)
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();

    const age = now - el;
    return `Age element ${index + 1}: ${age}`
});
console.log(ages6);
*/


/****************
ARROW FUNCTIONS 2
*****************
*/

/*
// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this; // kind of a hack
        document.querySelector('.green').addEventListener('click', function() {
            var string = 'This is the box number ' + self.position + ' with the color ' + self.color;
            alert(string);
        });
    },
};
box5.clickMe();


// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var string = 'This is the box number ' + this.position + ' with the color ' + this.color;
            alert(string);
        });
    },
};
box6.clickMe();

// const box66 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => {
//         document.querySelector('.green').addEventListener('click', () => {
//             var string = 'This is the box number ' + this.position + ' with the color ' + this.color;
//             alert(string);
//         });
//     },
// };
// box66.clickMe();
// WOULD NOT WORK AS THE METHOD ARROW FUNCTION ALSO INHERITS THE THIS KEYWORD LEXICALLY SO FROM THE GLOBAL OBJECT (AND THE WINDOW OBJECT DOESN'T HAVE A POSITION OR COLOR PROPERTY)


function Person (name) {
    this.name = name;
};

// ES5
Person.prototype.myFriends5 = function (friends) {
    
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);
};

var friends5 = ['Bob', 'Mark', 'Jane', 'Robert'];
new Person('John').myFriends5(friends5);

// ES6
Person.prototype.myFriends6 = function (friends) {

    const arr = friends.map((el) => `${this.name} is friends with ${el}`);

    console.log(arr);
};

let friends6 = ['Bob', 'Mark', 'Jane', 'Robert'];
new Person('Jamie').myFriends6(friends6);

function Budget (income, expenses) {
    this.income = income;
    this.expenses = expenses;
}

Budget.prototype.calcBudget = function () { 
    return this.income - this.expenses;
};

let budget1 = new Budget(1898, 2345);

console.log(budget1);
console.log(budget1.calcBudget());

let word = (inc) => this.budget1.income + inc;
*/

/************
DESCTUCTURING
*************
*/

/*
// ES5
var john5 = ['John', 'Smith', 26, 'teacher', false];
var obj5 = {
    firstName5_o: 'John',
    lastName5_o: 'Smith',
    age5_o: 26,
    job5_o: 'teacher',
    isMarried5_o: false,
}

// arrays
var firstName5_a = john5[0];
var lastName5_a = john5[1];
var age5_a = john5[2];
var job5_a = john5[3];
var isMarried5_a = john5[4];
console.log(age5_a, job5_a);

// objects
var firstName5_o = obj5.firstName5_o;
var lastName5_o = obj5.lastName5_o;
var age5_o = obj5.age5_o;
var job5_o = obj5.job5_o;
var isMarried5_o = obj5.isMarried5_o;
console.log(age5_o, isMarried5_o);


// ES6
let john6 = ['John', 'Smith', 26, 'teacher', false];
const obj6 = {
    firstName6_o: 'John',
    lastName6_o: 'Smith',
    age6_o: 26,
    job6_o: 'teacher',
    isMarried6_o: false,
}

// arrays
let [firstName6_a, lastName6_a, age6_a, job6_a, isMarried6_a] = john6;
console.log(isMarried6_a, firstName6_a);

// objects with variable names equal to property names
const {firstName6_o, lastName6_o, age6_o, job6_o, isMarried6_o} = obj6;
console.log(lastName6_o, job6_o);

// objects with own variable names
const {firstName6_o:fn, lastName6_o:ln, age6_o:a, job6_o:j, isMarried6_o:iM} = obj6;
console.log(fn, a);


// Example:

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age, retirementAge] = calcAgeRetirement(1990);
console.log(age);
console.log(retirementAge);
*/

/*****
ARRAYS
******
*/

/*
const boxes = document.querySelectorAll('.box');


// For Each Loops on Node Lists
// ES5
var boxesArray5 = Array.prototype.slice.call(boxes);

boxesArray5.forEach(function(current) {
    current.style.backgroundColor = 'dodgerblue';
});

// ES6
const boxesArray6 = Array.from(boxes);
Array.from(boxes).forEach(current => current.style.backgroundColor = 'dodgerblue');

// or recently (works as well)
boxes.forEach((current => current.style.backgroundColor = 'dodgerblue'));


// For Loops on arrays
// ES5
for (var i = 0; i < boxesArray5.length; i++) {
    if (boxesArray5[i].className.includes('blue')) {
        continue;
    }
    boxesArray5[i].textContent = 'I changed to blue!';
};


// ES6
for (const cur of boxesArray6) {
    if (cur.className === 'box blue') {
        continue;
    }
    cur.textContent = 'I changed to blue!';
};


//Find elements in arrays
// ES5
var ages5 = [12, 47, 25, 15, 11];

var fullAges5 = ages5.map(function(current) {
    return current >= 18;
})

console.log(fullAges5.indexOf(true));
console.log(ages5[fullAges5.indexOf(true)]);


// ES6
let ages6 = [12, 47, 25, 15, 11];

console.log(ages6.findIndex(cur => cur >= 18)); // get first index
console.log(ages6.find(cur => cur >= 18)); // get first element
*/


/**************
SPREAD OPERATOR
***************
*/

/*
function addFourAges(a, b, c, d) {
    return a + b + c + d;
};

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);


// ES5
var ages5 = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages5);

console.log(sum2);


// ES6
const ages6 = [18, 30, 12, 21];
const sum3 = addFourAges(...ages6);

console.log(sum3);

const smithFamily = ['John', 'Mark', 'Jane'];
const millerFamily = ['Mary', 'Bob', 'Anne'];

const bigFamily = [...smithFamily, 'Lily', ...millerFamily];
console.log(bigFamily);


const h1 = document.querySelectorAll('h1');
const boxes = document.querySelectorAll('.box');

const all = [...h1, ...boxes];
all.forEach(cur => cur.style.color = 'purple');
*/

/**************
REST PARAMETERS
***************
*/

/*
// ES5
function isFullAge5() {
    // console.log(arguments);
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function(cur) {
        console.log((new Date().getFullYear() - cur) >= 18);
    });
};

isFullAge5(1990, 1999, 2005);
isFullAge5(1990, 1999, 2005, 3440, 2007, 1946);


// ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((new Date().getFullYear() - cur) >= 18));
};

isFullAge5(1990, 1999, 2005);
isFullAge6(1990, 1999, 2005, 2016, 2009, 1967);


// ES5
function isFullAge5(limit) {
    // console.log(arguments);
    var args = Array.prototype.slice.call(arguments, 1);
    // console.log(args);
    args.forEach(function(cur) {
        console.log((new Date().getFullYear() - cur) >= limit);
    });
};

isFullAge5(21, 1990, 1999, 2005);
isFullAge5(18, 1990, 1999, 2005, 3440, 2007, 1946);


// ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((new Date().getFullYear() - cur) >= limit));
};

isFullAge5(1, 1990, 1999, 2005);
isFullAge6(1, 1990, 1999, 2005, 2016, 2009, 1967);
*/

/*****************
DEFAULT PARAMETERS
******************
*/

/*
// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'German' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
};

var john = new SmithPerson('John', 1990);
var max = new SmithPerson('Max', 1990, 'Miller');
var jane = new SmithPerson('Jane', 1990, 'Andrews', 'American');


// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'German') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
};


var john = new SmithPerson('John', 1990);
var max = new SmithPerson('Max', 1990, 'Miller');
var jane = new SmithPerson('Jane', 1990, 'Andrews', 'American');
*/

/***
MAPS
****
*/

/*
const question = new Map();
question.set('question', 'What is the official name of the latest major javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer!');
question.set(false, 'Wrong answer. Try again!');

console.log(question);

console.log(question.get('question'));
console.log(question.size);


if (question.has(4)) {
    question.delete(4);
    console.log('Answer 4 exists');
};

question.clear();

question.forEach((value, key) => {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    };
});

for (const [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`)
    };
};

const answer = parseInt(prompt('Write the correct number:'));
console.log(question.get(answer === question.get('correct')));

const person1 = new Map();

const question = new Map();
question.set('question', 'What is the official name of the latest major javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer!');
question.set(false, 'Wrong answer. Try again!');

for (const [key, value] of question.entries()) {
    console.log(`${key}: ${value}`);
};

for (const key of question.keys()) {
    console.log(`Key: ${key}`);
;}

for (const value of question.values()) {
    console.log(`Value: ${value}`);
};
*/

/******
CLASSES
*******
*/

/*
mary5 = new Person5('Mary', 1990, 'designer', true);

// ES5
function Person5(name, yearOfBirth, job, isMarried) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.isMarried = isMarried;
};

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

john5 = new Person5('John', 1990, 'teacher', false);
john5.calculateAge();


// ES6
class Person6 {
    constructor(name, yearOfBirth, job, isMarried) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
        this.isMarried = isMarried;
    }
    calculateAge() {
        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    checkStatus() {
        if (this.isMarried) {
            console.log(`${this.name} is married.`);
        }
        else {
            console.log(`${this.name} hasn't married yet.`);
        };
    }
    static greeting() {
        console.log(`Hey there!`);
    };
};

const john6 = new Person6('John', 1990, 'teacher', false);
john6.checkStatus();

Person6.greeting();
*/

/*********************
CLASSES AND SUBCLASSES
**********************
*/

/*
// ES5
function Person5(name, yearOfBirth, job, isMarried) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.isMarried = isMarried;
};

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

var Athlete5 = function(name, yearOfBirth, job, isMarried, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job, isMarried);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
};

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', true, 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();


// ES6
class Person6 {
    constructor(name, yearOfBirth, job, isMarried) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
        this.isMarried = isMarried;
    }
    calculateAge() {
        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
};

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, isMarried, olympicGames, medals) {
        super(name, yearOfBirth, job, isMarried);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
};

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', true, 3, 10);

johnAthlete6.calculateAge();
johnAthlete6.wonMedal();
*/

/*****************
CODING CHALLANGE 8
******************
*/

/*
class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
};

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }
    treeDensity() {
        console.log(`${this.name} has a tree density of ${Math.round(this.numTrees / this.area)} trees per square km.`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    classifySize() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}


const parks = [new Park('Green Park', 1956, 0.73, 834), new Park('National Park', 1894, 2.3, 3512), new Park('Oak', 1987, 0.4, 392)];

const streets = [new Street('Ocean Avenue', 1995, 1.3, 4), new Street('Evergreen Street', 2008, 2.7, 2), new Street('4th Street', 2015, 3.4), new Street('Sunset Boulevard', 1945, 6.4, 5), new Street('Oceans Thirteen Street', 2001, 5.7, 3)];


function calc(array) {

    const sum = array.reduce((previous, current, index) => previous + current, 0);
    const average = (sum / array.length).toFixed(1);
    return [sum, average];
}

function reportParks(p) {
    var ParksReport = 'Parks Report';
    console.log(`${'-'.repeat((75 - ParksReport.length)/2)}${ParksReport}${'-'.repeat((75 - ParksReport.length)/2)}`);

    // density
    p.forEach((el) => el.treeDensity());

    // average age
    const ages = p.map((el) => new Date().getFullYear() - el.buildYear);
    const [totalAge, averageAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average age of ${Math.round(averageAge)} years.`);

    // more than 1000 trees
    const i = p.map((el) => el.numTrees).findIndex((el) => el > 1000);
    console.log(`${p[i].name} has got over 1000 trees.`);
};

function reportStreets(s) {
    var StreetsReport = 'Streets Report';
    console.log(`${'-'.repeat((75 - StreetsReport.length)/2)}${StreetsReport}${'-'.repeat((75 - StreetsReport.length)/2)}`);

    // total and average length
    const [totalLength, averageLength] = calc(s.map((el) => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km with an average length of ${averageLength} km.`);
    
    // size classification
    s.forEach((el) => el.classifySize());
};


reportParks(parks);
reportStreets(streets);
*/
