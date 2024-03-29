// importing modules 
import { NewPoint } from './pointModule';


// regular function
let log = function (message) {
    console.log(message);
}

// arrow function
let doLog = (message) => {
    console.log(message);
};

// arrow function for one line functions
let deLog2 = (message) => console.log(message);

// you can also ignore brackets around parameter
// if only one parameter is there
let deLog3 = message => console.log(message);

// instead of declaring a lot of parameters
let drawPoint = (x, y, a, b, c) => {
    // ...
}

let drawPointBetter = (point) => {
    // ...
}

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

let drawPointBetter2 = (point: { x: number, y: number }) => {
    // ...
}

// solution 2)
// use interfaces

// define interface to define shape
// first letter is capital (convention)
interface Point {
    x: number,
    y: number
}

let drawPointBetter3 = (point: Point) => {
    // ...
}

let getDistance = (pointA: Point, pointB: Point) => [
    // ...
]

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

class Point {
    x: number;
    y: number;
    
    draw() {
        // ...
        console.log(`X: ${this.x} and Y: ${this.y}`);
    }

    getDistance(another: Point) {
        // ...
    }
}

// now we can call functions differently

// when we call the draw method
// point var is undefined
// object of custom type
// needs to be allocated with memory
// wrong: let point: Point;
// right:

let point = new Point();
point.x = 1;
point.y = 2;
point.draw();

// the above point variable is an instance of the Point class
// and is called object

// we used 3 lines just to initiate a object
// with properties
// we can do this in a better way

// NOTE: the following class is commented ouut
// because I shifted it to it's own file
// to demonstrate modules

/* class NewPoint {
    // instead of declaring her
    // you can declare in constructor
    // by using access modifiers
    // private x: number;
    // y: number;

    constructor(private x?: number, public y?:number) {
        this.x = x;
        this.y = y;
    }

    newDraw() {
        console.log(`New X: ${this.x} and New Y: ${this.y}`);
    }

    // instead of doing this
    getX() {
        return this.x;
    }

    setX(value) {
        if (value < 0)
            throw new Error('value cant be less than 0');

        this.x = value;
    }

    // you can use properties

    get X() {
        return this.x;
    }

    set X(value) {
        if (value < 0)
            throw new Error('value cant be less than 0');

        this.x = value;
    }
    
    // these properties can help when
    // you want to give only read permission (don't call setter method)
    // or you want to validate input
    // befoe setting value
}
 */
let newPoint = new NewPoint(1, 2);
newPoint.newDraw();
let x = newPoint.X;
newPoint.X = 10;

// you can also initate it without parameters
// by making the parameters optional
// you can do this by adding a '?' after parameter name in the constructor

// NOTE: once you make an parameter optional
// all parameters on its right should be optional as well

// right now we can change the parameters
// after initiallizing
// using newPoint.x = 3;
// to avoid this we use access modifiers

// 1) public (default)
// we can access all members after initializing

// 2) private
// we cannot access after initiallizing
// it is accessible only in the class itself
// x is set to private
// so doing newPoint.x = 3; now will give 
// compilation error

// 3) protected
// we cannot access after initializing
// but we can access it in the class itself
// and all of the class' subclass
