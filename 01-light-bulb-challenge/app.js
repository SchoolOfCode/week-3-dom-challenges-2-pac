/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement event listeners on buttons.
  3. Manipulate image attributes dynamically based on user interactions.

Brief:
You're provided with two images of a lightbulb: one turned on and one turned off. Your task is to implement the functionality to control the bulb's illumination. Use the 'Turn On' and 'Turn Off' buttons to switch the src attribute of the image tag, effectively lighting up or dimming the bulb.

Expected Outcomes:
  1. When the "Turn On" button is clicked, the lightbulb image should change to its 'on' state.
  2. When the "Turn Off" button is clicked, the lightbulb image should change to its 'off' state.
  3. The bulb's state should only change when the respective button is clicked.
*/

// Place your plan and solution below!


/*
plan
grab the onbutton
tell the button to change the picture
picture changes when button clicked
function will change the img src
when button is clicked run function
*/

const onButton = document.getElementById("turnBulbOn");

const img = document.getElementById("lightbulb");

function bulbOn() {
  img.src = "light-bulb-on.png"
};

onButton.addEventListener("click", bulbOn);

const offButton = document.getElementById("turnBulbOff");


function bulbOff() {
  img.src = "light-bulb-off.png"
};

offButton.addEventListener("click", bulbOff);









