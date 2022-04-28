// import functions and grab DOM elements
const architectureEl = document.getElementById('architectureImage');
const climateEl = document.getElementById('climateImage');
const mustSeeEl = document.getElementById('mustSeeImage');
const counts = document.getElementById('counts');

const sloganInput = document.getElementById('sloganInput');
const sloganButton = document.getElementById('sloganButton');
const sloganEl = document.getElementById('slogan');

const architectureSelect = document.getElementById('architecture-select');
const climateSelect = document.getElementById('climate-select');
const mustSeeSelect = document.getElementById('mustSee-select');
// let state
let architectCount = 0;
let climateCount = 0;
let mustSeeCount = 0;

let sloganArray = [];
// set event listeners 
architectureSelect.addEventListener('change', () => {
    architectureEl.style.backgroundImage = `url('./assets/${architectureSelect.value}.png')`;
    architectCount++;
    displayCounts();
});

climateSelect.addEventListener('change', () => {
    climateEl.style.backgroundImage = `url('./assets/${climateSelect.value}.png')`;
    climateCount++;
    displayCounts();
});

mustSeeSelect.addEventListener('change', () => {
    mustSeeEl.style.backgroundImage = `url('./assets/${mustSeeSelect.value}.png')`;
    mustSeeCount++;
    displayCounts();
});

sloganButton.addEventListener('click', () => {
    console.log('changing the slogan');
    sloganArray.push(sloganInput.value);
    sloganInput.value = ' ';
    displaySlogan();
});

function displaySlogan() {
    sloganEl.textContent = ' ';
    for (let sloganInput of sloganArray) {
        console.log(sloganArray);
        const sloganDiv = document.createElement('div');
        sloganEl.append(sloganDiv);
        sloganDiv.textContent = sloganInput;
    }
}
function displayCounts() {
    counts.textContent = `You have changed the Architecture ${architectCount} times, the Climate ${climateCount} times, and the Must See Attractions ${mustSeeCount} times.`;
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
