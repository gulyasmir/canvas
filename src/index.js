import { Drawable } from "./drawable.js";
import { Expected } from "./expected.js";

const canvas = new Drawable(document.querySelector("#canvas-1 canvas"));
const expected = new Expected(document.querySelector("#expected img"));
const taskSelector = document.querySelector("#task-selector");

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
    for (let x = 0; x < canvas.width; x++) {
        canvas.drawAt(x, 100);
    }
    expected.show(1);
}
//task1();

// 2. Draw a vertical line
function task2() {
    canvas.clear();
    for (let y = 0; y < canvas.height; y++) {
        canvas.drawAt(100, y);
    }
    expected.show(2);
}
//task2();

// 3. Draw a diagonal line
function task3() {
    canvas.clear();
    for (let i = 0; i < Math.min(canvas.width, canvas.height); i++) {
        canvas.drawAt(i, i);
    }
    expected.show(3);
}
//task3();

// 4. Draw a triangle
function task4() {
    canvas.clear();
    for (let i = 0; i < 50; i++) {
        canvas.drawAt(50 - i, 50 + i);
        canvas.drawAt(50 + i, 50 + i);
    }
    for (let x = 0; x <= 100; x++) {
        canvas.drawAt(x, 100);
    }
    expected.show(4);
}
//task4();

// 5. FizzBuzz Grid
function task5() {
    canvas.clear();
    let size = 15;
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            let index = row * size + col + 1;
            let color;
            if (index % 4 === 0 && index % 7 === 0) {
                color = "rgb(255, 0, 255)";
            } else if (index % 4 === 0) {
                color = "rgb(0, 0, 255)";
            } else if (index % 7 === 0) {
                color = "rgb(255, 0, 0)";
            } else {
                color = `rgb(0, ${index}, 0)`;
            }
            canvas.drawAt(col, row, color);
        }
    }
    expected.show(5);
}
//task5();

// 6. Style captions
function styleCaptions() {
    const captions = document.querySelectorAll(".caption");
    captions.forEach(caption => {
        caption.style.textAlign = "center";
        caption.style.fontWeight = "bold";
        caption.style.textTransform = "uppercase";
    });
}

// 7. Change between tasks
taskSelector.addEventListener("change", () => {
    const selectedTask = parseInt(taskSelector.value);
    runTask(selectedTask);
});

function runTask(taskNumber) {
    console.log('runTask', taskNumber)
    switch (taskNumber) {
        case 1: task1(); break;
        case 2: task2(); break;
        case 3: task3(); break;
        case 4: task4(); break;
        case 5: task5(); break;
        default: console.log("Invalid task selected");
    }
}

// 8. Expected image animations
const expectedImage = document.querySelector("#expected img");
expectedImage.style.opacity = "0";
expectedImage.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";

const playground = document.querySelector("#canvas-1");
playground.addEventListener("mouseenter", () => {
    expectedImage.style.opacity = "1";
    expectedImage.style.transform = "scale(1.1) rotate(5deg)";
});
playground.addEventListener("mouseleave", () => {
    expectedImage.style.opacity = "0";
    expectedImage.style.transform = "scale(1) rotate(0deg)";
});

const style = document.createElement("style");
style.innerHTML = `
    @keyframes flicker {
        0% { filter: brightness(1); }
        100% { filter: brightness(1.3); }
    }
    #expected img:hover {
        animation: flicker 0.5s infinite alternate;
    }
`;
document.head.appendChild(style);

runTask(1);
styleCaptions();
