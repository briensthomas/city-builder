// import functions and grab DOM elements
const architectureEl = document.getElementById('architectureImage');
const climateEl = document.getElementById('climateImage');
const mustSeeEl = document.getElementById('mustSeeImage');

const cityInput = document.getElementById('cityInput');
const cityButton = document.getElementById('cityButton');
const cityName = document.getElementById('cityName');

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

let cityArray = [];
let sloganArray = [];
// set event listeners 

cityButton.addEventListener('click', () => {
    console.log('changing city name');
    cityName.textContent = ' ';
    cityName.textContent = `${cityInput.value}`;
    cityArray.push(cityInput.value);
});

architectureSelect.addEventListener('change', () => {
    architectureEl.src = `./assets/${architectureSelect.value}.png`;
    architectCount++;
    displayCounts();
});

climateSelect.addEventListener('change', () => {
    climateEl.src = `./assets/${climateSelect.value}.png`;
    climateCount++;
    displayCounts();
});

mustSeeSelect.addEventListener('change', () => {
    mustSeeEl.src = `./assets/${mustSeeSelect.value}.png`;
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
const displaySlogan = () => {
  // reset the DOM so the array we'll pass in doesn't 
  // pile back on to the list
    sloganEl.textContent = ' ';
  // for let of loop displays each slogan in the array
    for (let sloganInput of sloganArray) {
        for (let city of cityArray) {
            console.log(sloganArray);
            // creates a new div to hold the contents of the array
            const sloganDiv = document.createElement('div');
            // tells the document where to add in the new element
            sloganEl.append(sloganDiv);
            // edits the new div element to display the text from the input box
            sloganDiv.textContent = city + ': ' + sloganInput;
        }
    }
};

const displayCounts = () => {
    counts.textContent = `You have changed the Architecture ${architectCount} times, 
    the Climate ${climateCount} times, and the Must See Attractions ${mustSeeCount} times, 
    and your City's Slogans are:`;
};
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
