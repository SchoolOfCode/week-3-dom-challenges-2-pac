/*
Learning Objectives:
  1. Manipulate DOM elements based on user input.
  2. Dynamically create and delete elements based on slider values.
  3. Enhance understanding of event-driven programming.

Brief:
You're provided with a slider (ranging from 1 to 5) and an empty space to populate star icons. Your task is to create or remove stars dynamically based on the value of the slider.

Expected Outcomes:
  1. The number of star icons should match the slider's value.
  2. Adjusting the slider should immediately reflect the change in the number of star icons.
*/

// Place your plan and solution below!


/*
plan

target slider range
for each increment of range 
create a new span star icon 
for each decrese in range
remove created span

*/

const slider = document.getElementById("starSlider");

const stars = document.getElementById("stars");

function starControl() {
// removes stars
  let child = stars.lastElementChild;
  while (child) {
        stars.removeChild(child);
        child = stars.lastElementChild;
  }
  const starCount = slider.value;
  console.log(starCount)
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("span"); 
        star.classList.add("star-icon");
        star.textContent ="★";
        stars.appendChild(star);
    }


};

slider.addEventListener("input", starControl)