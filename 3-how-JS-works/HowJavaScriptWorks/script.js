/****************
Lecture: Hoisting
*****************
*/

/*
// functions declarations

calculateAge(2007); // => works 
function calculateAge (year) {
    console.log(2020 - year);
}

calculateAge(2007); // => works aswell

// function expressions

// retirement(2007); => does NOT work as variables are set to 'undefinded' in the Creation Phase and first get assigned to a value within the Execution Phase when the processor comes to that specific line of code

var retirement = function (year) {
    var age = 2020 - year;
    console.log(65 - age);
}

retirement(2007); // => works as the variable has already been assigned to a value in line 18


// variables

console.log(age);
var age = 23;
console.log(age);

function foo () {
    console.log(age);
}

foo();
console.log(age);
*/

/***************
Lecture: Scoping
****************
*/

/*
// First scoping example

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}



// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
console.log(a);
first();

function first() {
    var b = 'Hi!';
    console.log(a+b);
    second();

    function second() {
        var c = 'Hey!';
        console.log(a+b+c);
        third()
    }
}

function third() {
    var d = 'John';
    // console.log(c);
    console.log(a+d)
}
*/


/**************************
Lecture: The 'this' keyword 
***************************
*/

/*
console.log(this);

calculateAge(1995);

function calculateAge (year) {
    console.log(2020 - year);
    console.log(this);
};

var john = {
    firstName: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    calculateAge: function () {
        console.log(this);
        console.log(2020 - this.yearOfBirth);

        function innerFunction () {
            console.log(this);
        }  
        innerFunction();
        
    },
};

john.calculateAge();

var mike = {
    firstName: 'Mike',
    lastName: 'Miller',
    yearOfBirth: 2005,
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/