// regular function
var log = function (message) {
    console.log(message);
};
// arrow function
var doLog = function (message) {
    console.log(message);
};
// arrow function for one line functions
var deLog2 = function (message) { return console.log(message); };
// you can also ignore brackets around parameter
// if only one parameter is there
var deLog3 = function (message) { return console.log(message); };
// instead of declaring a lot of parameters
var drawPoint = function (x, y, a, b, c) {
    // ...
};
var drawPointBetter = function (point) {
    // ...
};
// and then pass them in a object
drawPointBetter({
    x: 1,
    y: 2
});
// but what if we send the wrong variables
// inside the object
// for that, do this:
// solution 1)
// use inline annotations
var drawPointBetter2 = function (point) {
    // ...
};
var drawPointBetter3 = function (point) {
    // ...
};
var getDistance = function (pointA, pointB) { return [
// ...
]; };
// the interface and the functions are related
// so they should be together
// we call this principle cohesion
// so we form classes
// variables and functions that are
// highly related
// variables are called properties
// functions are called methods
// we can not have functions in interface
// but we can have signatures
// so we use class
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        // ...
        console.log("X: " + this.x + " and Y: " + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
// now we can call functions differently
// when we call the draw method
// point var is undefined
// object of custom type
// needs to be allocated with memory
// wrong: let point: Point;
// right:
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
