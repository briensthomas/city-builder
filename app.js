// import functions and grab DOM elements
const architectureEl = document.getElementById('architectureImage');
const architectureSelect = document.getElementById('architecture-select');

// let state

// set event listeners 
architectureSelect.addEventListener('change', () => {
    console.log(`changing Architecture to ${architectureSelect.value}`)
    architectureEl.style.backgroundImage = `url(./assets/${architectureSelect.value}-architecture.jpg')`;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
