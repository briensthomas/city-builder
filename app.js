// import functions and grab DOM elements
const architectureEl = document.getElementById('architectureImage');
const climateEl = document.getElementById('climateImage');
const mustSeeEl = document.getElementById('mustSeeImage');

const sloganInput = document.getElementById('sloganInput');
const sloganButton = document.getElementById('sloganButton');
const sloganEl = document.getElementById('slogan');

const architectureSelect = document.getElementById('architecture-select');
const climateSelect = document.getElementById('climate-select');
const mustSeeSelect = document.getElementById('mustSee-select');

const counts = document.getElementById('counts');
// let state
let architectCount = 0;
let climateCount = 0;
let mustSeeCount = 0;

let sloganArray = [];
// set event listeners 
architectureSelect.addEventListener('change', () => {
    architectureEl.style.backgroundImage = `url('./assets/${architectureSelect.value}.png')`;
    
    // const img = document.createElement('img');

    // img.src = `./assets/${architectureSelect.value}.png`;
    // architectureEl.appendChild(img);
    // architectureEl.style.backgroundImage = `url('./assets/${architectureSelect.value}.png')`;
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

// function to display slogans to the user
function displaySlogan() {
  // reset the DOM so the array we'll pass in doesn't 
  // pile back on to the list
    sloganEl.textContent = ' ';
  // for let of loop displays each slogan in the array
    for (let sloganInput of sloganArray) {
        console.log(sloganArray);
  // creates a new div to hold the contents of the array
        const sloganDiv = document.createElement('div');
  // tells the document where to add in the new element
        sloganEl.append(sloganDiv);
  // edits the new div element to display the text from the input box
        sloganDiv.textContent = sloganInput;
    }
}

function displayCounts() {
    counts.textContent = `You have changed the Architecture ${architectCount} times, 
    the Climate ${climateCount} times, and the Must See Attractions ${mustSeeCount} times, 
    and your City's Slogans are:`;
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
