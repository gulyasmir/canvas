import { Drawable } from "./drawable.js";
import { Expected } from "./expected.js";

const canvas = new Drawable(document.querySelector("#canvas-1 canvas"));
const expected = new Expected(document.querySelector("#expected img"));

function example() {
  canvas.clear();
  expected.show(0);
  canvas.drawAt(0, 0);
  canvas.drawAt(0, 1, "rgb(0, 0, 255)");
  canvas.drawAt(1, 0, "red");
  canvas.drawAt(canvas.width - 1, 0, "green");
}
example();

// 1. Draw a horizontal line

function task1() {
  canvas.clear();
  canvas.line(50, 100, 250, 100); 
  expected.show(1);
}
task1();

// 2. Draw a vertical line

function task2() {
  canvas.clear();
  canvas.line(100, 50, 100, 250);
  expected.show(2);
}
task2();

// 3. Draw a diagonal line

function task3() {
  canvas.clear();
  expected.show(3);
}
//task3();

// 4. Draw a triangle

function task4() {
  canvas.clear();
  expected.show(4);
}
//task4();

// 5. FizzBuzz
// The playground is a 15 by 15 grid.
// Assign a number to each cell of this grid like so:
//   1   2   3 ...  15
//  16  17  18 ...  30
// ...
// 211 212 213 ... 225
//
// Call the assigned number "the index of the cell".
// The goal of this exercice is to color each cell with rgb(0, i, 0), i being its index.
// A few exceptions are:
// 1. when the index is a multiple of 4 choose rgb(0, 0, 255) as the cell's color
// 2. when it's a multiple of 7 choose rgb(255, 0, 0)
// 3. when it's a multplie of both 4 and 7 choose rgb(255, 0, 255)

function task5() {
  canvas.clear();
  expected.show(5);
}
//task5();

// 6. Style the display:
// - captions should be: centered, in bold and in all caps (full capital letters)
// - display the playground and the expected image next to each other

// 7. Change between tasks via an html input

// 8. Only reveal the expected image when the mouse passes over the playground. Add some fancy animations.
