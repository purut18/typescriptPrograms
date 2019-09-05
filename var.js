// normal javascript
var number = 1;
// typescript version
// ES6 in Javascript supports this too
var count = 2;
// by default, in javascript
// when variable is declared 
// it is scoped to the nearest function
// so it can be accessed in console.log
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();
// when we use the let keyword
// it isn't scoped to function
// it remains in the for loop only
// and 'i' can't be accessed in console.log
// though when you compile the code
// it is converted to 'var' so it works fine
function doSomethingTS() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomethingTS();
// this is wrong typescript code
// can't reassign type of variable
// but this compiles to correct javascript code 
// it's not good to do this
// so better to write in typescript so we can catch such errors
var num = 5;
num = 'a';
// if you want a variable with any type
// set it like this
var a; // type: any
a = 1;
a = true;
a = 'a';
// you can also set type
var b;
var c;
var d;
var e;
var f = [1, 2, 3];
var g = [1, true, 'a']; // not good but can do
// enum
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
