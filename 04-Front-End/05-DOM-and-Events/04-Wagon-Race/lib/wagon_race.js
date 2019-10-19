// TODO: write your code here

const place = document.querySelectorAll('#player1_race td');
let i = 1;
let j = 1;
document.addEventListener("keyup", (event) => {
  if (event.code === "ArrowRight") {
    console.log(event);
    i += 1;
    const inactive = document.querySelector(`#player2_race td.num${i - 1}`);
    inactive.classList.remove('active');
    const active = document.querySelector(`#player2_race td.num${i}`);
    active.classList.add('active');
  } else if (event.code === "KeyA") {
    console.log(event);
    j += 1;
    const inactive = document.querySelector(`#player1_race td.num${j - 1}`);
    inactive.classList.remove('active');
    const active = document.querySelector(`#player1_race td.num${j}`);
    active.classList.add('active');
  }
});
