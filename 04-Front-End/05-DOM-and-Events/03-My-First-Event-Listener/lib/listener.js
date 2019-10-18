// TODO: React to a click on the button!
const buttonx = document.querySelector('button');
const audio = new Audio('sound.mp3');
buttonx.addEventListener('click', (event) => {
  buttonx.classList.add('disabled');
  buttonx.innerText = 'Bingo!';
  audio.play();
});
