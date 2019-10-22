// TODO: write your code here!
const sports = document.querySelectorAll(".clickable");

const displayClickedElement = (event) => {
  console.log(event);
  event.currentTarget.classList.add("active");
};

sports.forEach((sport) => {
  sport.addEventListener("click", displayClickedElement);
});
