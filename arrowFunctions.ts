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



