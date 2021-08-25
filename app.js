// import functions
const catSound = document.getElementById('cat-audio');
const catImage = document.getElementById('cat-image');

const dogSound = document.getElementById('dog-audio');
const dogImage = document.getElementById('dog-image');

const horseSound = document.getElementById('horse-audio');
const horseImage = document.getElementById('horse-image');






// reference needed DOM elements
catImage.addEventListener('click', () => {
    

    catSound.play();

});

dogImage.addEventListener('click', () => {
    dogSound.play();
});

horseImage.addEventListener('click', () => {
    horseSound.play();
});
// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
