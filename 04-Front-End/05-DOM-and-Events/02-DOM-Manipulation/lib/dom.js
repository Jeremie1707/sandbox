/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */

// INSTRUCTIONS - PLEASE READ!!
// Here are some challenges. Solve them from top to bottom

// **Each time** you complete a challenge, please commit and push!
// This is a good practise. Each time you make some progress in software
// development, you want to save a snapshot.


module.exports = function runChallenges(check) {
  // Ex 1. Read what's written in the email input
  //       Make the function getEmail() return it
  const getEmail = () => {
    // TODO: return the email
    const email = document.querySelector('#email');
    return email.attributes.value.value;
  };

  // /!\ DO NOT CHANGE THIS LINE - TEST PURPOSES
  const borisesEmail = getEmail();

  // Ex 2. Change the content of the email input by writing your own email address
  const email = document.querySelector('#email');
  email.attributes.value.value = 'jp@test.co';

  // Ex 3. Replace the email hint (next to the input) with 'This is my email now'
  //       The text should be emphasized using a <strong> tag
  const emailHint = document.querySelector('#email-hint');
  console.log(emailHint);
  emailHint.innerHTML = '<strong>This is my email now</strong>';



  // Ex 4. Add the .blue CSS class to the th elements
  const title = document.querySelectorAll('th');
  title.forEach((element) => {
    element.classList.add('blue');
  });


  // Ex 5. Count the number of table body rows there are
  //       Make the function teamCount() return it
  const teamCount = () => {
    // TODO: return the number of teams
    let count = 0;
    const rugbyClub = document.querySelectorAll('tbody tr');
    rugbyClub.forEach((club) => {
      count += 1;
    });
    console.log(count);
    return count;
  };

  // /!\ DO NOT CHANGE THIS LINE - TEST PURPOSES
  const teamCountBeforeAddition = teamCount();

  // Ex 6. Say there is a 15th team added to the table.
  //       Add a row at the bottom, this new team should have zero points.
  const teamList = document.querySelector('tbody');
  teamList.insertAdjacentHTML('beforeend', '<tr><td>15</td><td>Bretagne Olympique </td><td>0</td></tr>');



  // Ex 7. Write some code to sum all points given to all teams
  //       Make the function summarizePoints() return it
  const summarizePoints = () => {
    // TODO: return the sum
    let sum = 0;
    const rugbyClub = document.querySelectorAll('tbody > tr');
    rugbyClub.forEach((club) => {
      sum += parseInt(club.lastChild.innerText, 10);
    });
    console.log(sum);
    return sum;
  };


  // Ex 8. Change the background color of all `<th>` cells to #DDF4FF
  title.forEach((element) => {
    element.style.backgroundColor = 'rgb(221, 244, 255)';
  });





  // Ex 9. Remove the "Email:" label from the DOM
  let label = document.querySelector('label');
  label.remove();










  // Checking exercise answers. DO NOT MODIFY THIS LINE
  check(borisesEmail, teamCountBeforeAddition, summarizePoints());
};
