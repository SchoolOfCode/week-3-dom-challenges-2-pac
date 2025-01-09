/*
Learning Objectives:
  1. Understand and utilize DOM input events.
  2. Manipulate the style properties of DOM elements.
  3. React to changes in input fields dynamically.

Brief:
You're presented with a canvas and a color picker. Your task is to implement the functionality to change the background color of the canvas based on the color selected in the color picker.

Expected Outcomes:
  1. When a color is selected using the color picker, the canvas should instantly reflect that color.
  2. The canvas should always display the current color selected in the color picker.
*/

// Place your plan and solution below!


/*
plan

need to make the canvas change color
canvas always displays current color selected

target the color picker
target the canvas
pick color
change the canvas color to color match color picker
*/

const colorPicker = document.getElementById("colorPicker");

const canvasColor = document.getElementById("canvas");

function changeColor(){
    canvasColor.style.backgroundColor = colorPicker.value

};

colorPicker.addEventListener("input", changeColor)