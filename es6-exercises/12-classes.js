// Write a class called Point, which represents a point in two-dimensional space.
// A point has x and y properties, given as arguments to its constructor.

// It also has a single method plus, which takes another point and returns the sum
// of the two points, that is, a new point whose x is the sum of the x properties
// of the two original points, and whose y is the sum of their y properties.

// Your code here
class Point {
  // constructor is the function that gets run when we create a new point
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  // take in another point and return the combination of points
  // newPoint.x = thisPoint.x + otherPoint.x,  newPoint.y = thisPoint.y + otherPoint.y
  plus(otherPoint){  // point just has structure {x: some number, y: some other number}
    // ...
    let newX = this.x + otherPoint.x   // addition of x from each point
    let newY = this.y + otherPoint.y
    return new Point(newX, newY)
  }
}
// console.log(new Point(1,2).x)
let pointA = new Point(1, 2)
let pointB = new Point(2, 1)
console.log(pointA.plus(pointB))
// → Point{x: 3, y: 3}


// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Point
