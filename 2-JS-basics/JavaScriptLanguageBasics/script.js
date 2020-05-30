/***********************
Variables and Data Types
************************
*/

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

var tech = "four";
console.log(tech);
*/

/**********************************
Variable Mutation and Type Coercion
***********************************
*/

/*
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

// Type Coercion
var job, isMarried;
job = "Teacher";
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// Variable Mutation
age = "twenty eight";
job = "driver";

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');

console.log(firstName + ' ' + lastName);
*/

/**************
Basic Operators
***************
*/

/*
var currentYear, yearJohn, yearMark, ageJohn, ageMark;

currentYear = 2020;
ageJohn = 28;
ageMark = 33;

// Math Operators
yearJohn = currentYear - ageJohn;
yearMark = currentYear - ageMark;

console.log(yearJohn, yearMark);

console.log(currentYear - 2);
console.log(currentYear + 2);
console.log(currentYear * 2);
console.log(currentYear / 2);

// Logical Operators

var johnYounger = ageJohn < ageMark;
console.log(johnYounger);

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// Typeof Operator
var none;

console.log(typeof johnOlder, typeof ageMark, typeof 'Hello', typeof none);
*/

/******************
Operator Precedence
*******************
*/

/*
var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

// Multiple Operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Mutiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More Operators
x *= 2;
console.log(x);
x += 4;
console.log(x);
x--;
console.log(x);
*/

/*****************
Coding Challenge 1
******************
*/

/*
// Masses (in kg)
var massJohn = 73;
var massMark = 67;

// Heights (in m)
var heightJohn = 1.71;
var heightMark = 1.63;

// Calculate BMI
var johnBMI = massJohn / heightJohn**2;
console.log("John's BMI: " + johnBMI);

var markBMI = massMark / heightMark**2;
console.log("Mark's BMI: " + markBMI);

// Compare BMI
var markHigherBMI = markBMI > johnBMI;

console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI + '.');
*/

/*******************
If / Else Statements
********************
*/

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}
var isMarried = false;
if (!isMarried) {
    console.log("Hello");
}

// Masses (in kg)
var massJohn = 78;
var massMark = 76;

// Heights (in m)
var heightJohn = 1.71;
var heightMark = 1.63;

// Calculate BMI
var johnBMI = massJohn / heightJohn**2;
console.log("John's BMI: " + johnBMI);

var markBMI = massMark / heightMark**2;
console.log("Mark's BMI: " + markBMI);

// Use If/Else Statement
if (markBMI > johnBMI) {
    console.log('Mark\'s got a higher BMI than John.');
}
else if (johnBMI > markBMI) {
    console.log('John\'s got a higher BMI than Mark.');   
} 
else {
    console.log('Mark and John both have got the same BMI.');
}
*/

/************
Boolean Logic
*************
*/

/*
var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a kid.');
} else if (age >= 13 && age < 20) { // Between 13 and 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) { 
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/*****************************************
The Ternary Operator and Switch Statements 
******************************************
*/

/*
var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18) {
    drink = 'beer';
} else {
    drink = 'juice';
};

var job = 'designer';

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default: 
        console.log(firstName + ' does something else.');
}

switch (true) {
    case age < 0:
        console.log(firstName + ' hasn\'t been born yet.');
        break;
    case age >= 0 && age < 5:
        console.log(firstName + ' is a baby.');
        break;
    case age >= 5 && age < 13:
        console.log(firstName + ' is a kid.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    case age >= 30 && age < 60:
        console.log(firstName + ' is a man.');
        break;
    case age >= 60 && age < 130:
        console.log(firstName + ' is an old man.');
        break;
    case age >= 130:
        console.log(firstName + ' is probably the oldest man on earth.');
        break;
    default: 
        console.log(firstName + ' is a man.');
        break;       
}

var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a kid.');
} else if (age >= 13 && age < 20) { // Between 13 and 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) { 
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/
/*********************************************
Truthy and Falsy Values and Equality Operators
**********************************************
*/

/*
// Falsy Values: undefined, null, 0, '', NaN
// Truthy Values: NOT Falsy Values

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined.');
} else {
    console.log('Variable is undefinded.');
}

// Equality Operators

if (height == "23") {
    console.log('The == Operator does Type Coercion!');
}
*/

/*****************
Coding Challenge 2
******************
*/

/*
var john1stMatch = 102;
var john2ndMatch = 160;
var john3rdMatch = 100;

var mike1stMatch = 100;
var mike2ndMatch = 180;
var mike3rdMatch = 100;

var mary1stMatch = 101;
var mary2ndMatch = 100;
var mary3rdMatch = 100;


var johnAverage = (john1stMatch + john2ndMatch + john3rdMatch) / 3;
var mikeAverage = (mike1stMatch + mike2ndMatch + mike3rdMatch) / 3;
var maryAverage = (mary1stMatch + mary2ndMatch + mary3rdMatch) / 3;


if (johnAverage > mikeAverage && johnAverage > maryAverage) {
    console.log('John\'s team wins in average with an average ' + johnAverage + ' points!');
    if (mikeAverage > maryAverage) {
        console.log('Mike\'s team scores an average of ' + mikeAverage + ' points.');
        console.log('Mary\'s team scores an average of ' + maryAverage + ' points.');
    } else {
        console.log('Mary\'s team scores an average of ' + maryAverage + ' points.');
        console.log('Mike\'s team scores an average of ' + mikeAverage + ' points.');
    };
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
    console.log('Mike\'s team wins in average with an average ' + mikeAverage + ' points!');
    if (johnAverage > maryAverage) {
        console.log('Johns\'s team scores an average of ' + johnAverage + ' points.');
        console.log('Mary\'s team scores an average of ' + maryAverage + ' points.');
    } else {
        console.log('Mary\'s team scores an average of ' + maryAverage + ' points.');
        console.log('Johns\'s team scores an average of ' + johnAverage + ' points.');
    };
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
    console.log('Mary\'s team wins in average with an average ' + maryAverage + ' points!');
    if (johnAverage > mikeAverage) {
        console.log('John\'s team scores an average of ' + johnAverage + ' points.');
        console.log('Mike\'s team scores an average of ' + mikeAverage + ' points.');
    } else {
        console.log('Mike\'s team scores an average of ' + mikeAverage + ' points.');
        console.log('John\'s team scores an average of ' + johnAverage + ' points.');
    };
} else if (johnAverage === mikeAverage && johnAverage > maryAverage) {
    console.log('John\'s and Mike\'s team both win with an average of ' + johnAverage + ' points!');
    console.log('Mary\'s team scored ' + maryAverage + ' points.');
} else if (johnAverage === maryAverage && johnAverage > mikeAverage) {
    console.log('John\'s and Mary\'s team both win with an average of ' + johnAverage + ' points!');
    console.log('Mike\'s team scored ' + mikeAverage + ' points.');
} else if (mikeAverage === maryAverage && mikeAverage > johnAverage) {
    console.log('Mike\'s and Mary\'s team both win with an average of ' + mikeAverage + ' points!');
    console.log('John\'s team scored ' + johnAverage + ' points.');
} else {
    console.log('They are all winners! All three teames scored ' + johnAverage + ' points!');
};
*/

/********
Functions
*********
*/

/*
function calculateAge (birthYear) {
    return 2020 - birthYear;
}

function callAge (birthYear, firstName) {
    var age = calculateAge(birthYear);
    console.log(firstName + '\'s Age: ' + age);
}

callAge(1990, 'John');
callAge(2001, 'Mary');
callAge(1978, 'Mike');

function yearsUntilRetirement (birthYear, firstName) {
    var age = calculateAge(birthYear);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' will retire in ' + retirement + ' years.');
    } else if (retirement < 0) {
        retirement *= -1;
        console.log(firstName + ' has retired since ' + retirement + ' years.');
    } else {
        console.log(firstName + ' has retired just this year.');   
    }
}

yearsUntilRetirement(1990, "John");
yearsUntilRetirement(2001, 'Mary');
yearsUntilRetirement(1978, 'Mike');
yearsUntilRetirement(1920, 'Robert');
yearsUntilRetirement(1955, 'Julia');
*/

/**********************************
Function Statements and Expressions
***********************************
*/

/*
// Function Declaration
// function whatDoYouDo (job, firstName) {}

// (Anonymous) Function Expression
var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher': 
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Libon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

// Function Statement
function whatDoIDo (job, firstName) {
    switch (job) {
        case 'teacher': 
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Libon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('designer', 'John'));
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'John'));
console.log(whatDoYouDo('retired', 'John'));
console.log(whatDoIDo('teacher', 'Mary'));
*/

/*****
Arrays
******
*/

/*
// Initialize New Array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);
console.log(names);

// Mutate Array Data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different Data Types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr');
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));
console.log(john.indexOf(10));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer!';
console.log(isDesigner);
*/

/*****************
Coding Challenge 3
******************
*/

/*
var bills = [124, 48, 268];

var tips = [tipCalculator(bills[0]), 
            tipCalculator(bills[1]), 
            tipCalculator(bills[2])];

var finalPayments = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, finalPayments);


function tipCalculator (bill) {
    var percentage;
    if (bill > 0 && bill < 50) {

        percentage = 20 / 100;

    } else if (bill >= 50 && bill < 200) {

        percentage = 15 / 100;

    } else if (bill >= 200) {

        percentage = 10 / 100;

    } else {

        percentage = 0;
    };
    return bill * percentage;
}
*/

/*********************
Objects and Properties
**********************
*/

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Mike', 'Luisa'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['firstName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
john.birthYear += 1;

createUser('Jane', 'Smith', 1969, 'designer', true, ['John', 'Mary', 'Mike', 'Luisa']);

console.log(newUser);

function createUser (firstName, lastName, birthYear, job, isMarried, family) {
    newUser = new Object();
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.birthYear = birthYear;
    newUser.job = job;
    newUser.isMarried = isMarried;
    newUser.family = family;
}
*/

/******************
Objects and Methods
*******************
*/

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Mike', 'Luisa'],
    job: 'teacher',
    isMarried: false,
    calcAge: function () {
        this.age = 2020 - this.birthYear;
    }
};

john.calcAge();

console.log(john);
*/

/*****************
Coding Challenge 4
******************
*/

/*
var mark = {
    firstName: 'Mark',
    lastName: 'Smith',
    height: 1.65,
    mass: 65,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var john = {
    firstName: 'John',
    lastName: 'Smith',
    height: 1.73,
    mass: 74,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if (mark.calcBMI() > john.calcBMI()) {
    console.log(mark.firstName + ' has the highest BMI: ' + mark.bmi);
    console.log(john.firstName + ' has a BMI of: ' + john.bmi);
} else if (john.bmi > mark.bmi) {
    console.log(john.firstName + ' has the highest BMI: ' + john.bmi);
    console.log(mark.firstName + ' has a BMI of: ' + mark.bmi);
} else {
    console.log('Both have a BMI of: ' + john.bmi);
}
*/

/******************
Loops and Iteration
*******************
*/

/*
// For-Loop
for (var i = 10; i >= 0; i-=2){
    console.log(i);
}

// i = 10, 10 >= 0 true => log i(10) to console, 10-=2 => new i = 8
// i = 8, 8 >= 0 true => log i(=8) to console, 8-=2 => new i = 6
// i = 6, 6 >= 0 true => log i(=6) to console, 6-=2 => new i = 4
// i = 4, 4 >= 0 true => log i(=4) to console, 4-=2 => new i = 2
// i = 2, 2 >= 0 true => log i(=2) to console, 2-=0 => new i = 0
// i = 0, 0 >= 0 true => log i(=0) to console, 0-=2 => new i = -2
// i = -2, -2 >= 0 false => exit loop!

var john = ['John', 'Smith', 1990, 'designer', false, 1.65, 73];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While-Loop
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}


// continue and break Statements
var john = ['John', 'Smith', 1990, 'designer', false, 1.65, 73, 'Ok'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

for (var i = john.length-1; i >= 0; i--){
    console.log(john[i]);
}

// looping backwards
*/

/*****************
Coding Challenge 5
******************
*/

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 2007,
    height: 1.61,
    mass: 69,
    bills: [124, 48, 268, 180, 42],
    // function to calculate tips
    calculateTips: function () {
        // setting up empty arrays to later add data to them
        this.tips = [];
        this.finalPayments = [];

        // loop over every item of 'bills' array
        for (var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            var percentage;
            if (bill > 0 && bill < 50) {
                percentage = 0.2;
            } else if (bill >= 50 && bill <= 200) {
                percentage = 0.15;
            } else if (bill >= 200){
                percentage = 0.1;
            } else {
                percentage = 0;
            }
            // adding each tip amount to empty arrays
            this.tips[i] = bill * percentage;
            this.finalPayments[i] = this.tips[i] + bill;
        }
    }
}

var mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    birthYear: 2005,
    height: 1.68,
    mass: 78,
    bills: [77, 345, 110, 45],
    // function to calculate tips
    calculateTips: function () {
        // setting up empty arrays to later add data to them
        this.tips = [];
        this.finalPayments = [];

        // loop over every item of 'bills' array
        for (var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            var percentage;
            if (bill > 0 && bill < 100) {
                percentage =  0.2;
            } else if (bill >= 100 && bill <= 300) {
                percentage = 0.1;
            } else if (bill > 300){
                percentage = 0.25;
            } else {
                percentage = 0;
            }
            // adding each tip amount to empty arrays
            this.tips[i] = bill * percentage;
            this.finalPayments[i] = this.tips[i] + bill;
        }
    }
}

var jane = {
    firstName: 'Jane',
    lastName: 'Stanford',
    birthYear: 2002,
    height: 1.66,
    mass: 70,
    bills: [65, 132, 268, 169, 304, 95, 180],
    // function to calculate tips
    calculateTips: function () {
        // setting up empty arrays to later add data to them
        this.tips = [];
        this.finalPayments = [];
        // loop over every item of the 'bills' array
        for (var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            var percentage = (200 - bill)/200;

            if (percentage < 0) {
                percentage = 0;
            }
            this.tips[i] = bill * percentage;
            this.finalPayments[i] = this.tips[i] + bill;
        }
    }
}

// function to calculate the average amount of money of an array of payments
// (in this case: tips)
function averageTip (arrayOfTips) {
    // variable containing the sum of all payments
    var sumOfTips = 0;
    for (var i = 0; i < arrayOfTips.length; i++) {
        // adding each payment to 'sumOfTips'
        sumOfTips += arrayOfTips[i];
    }
    // sum of all payments / number of all payments (=average)
    return sumOfTips / arrayOfTips.length;
}

// executing the tip calculation functions of the john and mark objects

var families = [
    john,
    mark,
    jane,
]

// looping over each family data and logging to console
for (var i = 0; i < families.length; i++) {
    var family = families[i];
    family.calculateTips();
    console.log(family);
    family.average = averageTip(family.tips)
}


if (john.average > mark.average && john.average > jane.average) {
    console.log(john.firstName + '\'s family paid higher tips than the other families (in average):');
    console.log(john.firstName + '\'s family paid an average of: $' + john.average);
    console.log(mark.firstName + '\'s family paid an average of: $' + mark.average);
    console.log(jane.firstName + '\'s family paid an average of: $' + jane.average);
} 
else if (mark.average > john.average && mark.average > jane.average) {
    console.log(mark.firstName + '\'s family paid higher tips than the other families (in average):');
    console.log(mark.firstName + '\'s family paid an average of: $' + mark.average);
    console.log(john.firstName + '\'s family paid an average of: $' + john.average);
    console.log(jane.firstName + '\'s family paid an average of: $' + jane.average);
}
else if (jane.average > john.average && jane.average > mark.average) {
    console.log(jane.firstName + '\'s family paid higher tips than the other families (in average):');
    console.log(jane.firstName + '\'s family paid an average of: $' + jane.average);
    console.log(john.firstName + '\'s family paid an average of: $' + john.average);
    console.log(mark.firstName + '\'s family paid an average of: $' + mark.average);
}
else {
    console.log('All families have paid the same amount of tips (in average):');
    console.log('John\'s, Mark\'s and Jane\'s families paid an average of: $' + john.average);
}
*/




