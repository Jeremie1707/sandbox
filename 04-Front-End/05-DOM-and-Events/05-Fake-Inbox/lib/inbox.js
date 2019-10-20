/* eslint-disable no-multiple-empty-lines */

const hasNewMessage = () => {
  // TODO: return true with a probability of 20%.
  if (Math.random() <= 0.2) {
    return true;
  } return false;
};


let email;

const newMessage = () => {
  if (Math.random() <= 0.5) {
    email = {
      sender: 'Arnold Schwarzenegger',
      subject: "I'm Back"
    };
  } else {
    email = {
      sender: 'GitHub Team',
      subject: 'Welcome to GitHub'
    };
  }
};
// TODO: return a random message as an object with two keys, subject and sender


const appendMessageToDom = (message) => {
  newMessage();
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
  const inbox = document.getElementById('inbox');
  inbox.insertAdjacentHTML("afterbegin", `<div class="row message unread">
      <div class="col-3">${email.sender}</div>
      <div class="col-9">${email.subject}</div>
    </div>`);
};

const refresh = () => {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
  if (hasNewMessage()) {
    appendMessageToDom();
    const countNumber = (document.querySelectorAll("#inbox .unread")).length.toString();
    const count = document.getElementById('count');
    count.innerText = "";
    count.insertAdjacentText("afterbegin", `(${countNumber})`);
  }
};


// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

module.exports = { hasNewMessage, newMessage };
