// import functions and grab DOM elements
const architectureEl = document.getElementById('architectureImage');


const architectureSelect = document.getElementById('architecture-select');
const climateSelect = document.getElementById('climate-select');
const mustSeeSelect = document.getElementById('mustSee-select')
// let state

// set event listeners 
architectureSelect.addEventListener('change', () => {
    console.log(`changing Architecture to ${architectureSelect.value}`)
    architectureEl.style.backgroundImage = `url(./assets/${architectureSelect.value}-architecture.jpg')`;
});

climateSelect.addEventListener('change', () => {
    console.log(`changing climate to ${climateSelect.value}`);
});

mustSeeSelect.addEventListener('change', () => {
    console.log(`changing mustSee to ${mustSeeSelect.value}`);
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
