// TODO: Autocomplete the input with AJAX calls.
// <li>Result 1 (TODO: remove)</li>
const input = document.getElementById("search");
const results = document.getElementById("results");


const callApi = (inputCall) => {
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${input.value}`)
    .then(response => response.json())
    .then((data) => {
      data.words.forEach((word) => {
        let inpTry = "";
        inpTry = `<li>${word}</li>`;
        results.insertAdjacentHTML("beforeend", inpTry);
      });
    });
};

const displaySuggestions = (event) => {
  results.innerHTML = "";
  const value = input.value;
  callApi(input.value);
};

input.addEventListener("keyup", displaySuggestions);
