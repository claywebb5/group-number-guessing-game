$(document).ready(handleReady);

theRando = 5;

function handleReady() {
  console.log("jquery is loaded!")
  $('#guess-button').on('click', displayDetailsArea);
  $('#guess-button').on('click', randomNumberGenerator);
  $('#guess-button').on('click', totalGuessTracker);
  $('#guess-button').on('click', emptyInputs);
  $('#reset-button').on('click', resetEverything);
}; // end of function


// console.log('theRando is:', theRando);

// this function will check the input numbers against the randomly generated number.
// first it assigns the input numbers to each person/object.
function randomNumberGenerator() {
  let clay = {
    name: 'Clay',
    number: Number($('#clay-input').val())
  }
  let tony = {
    name: 'Tony',
    number: Number($('#tony-input').val())
  }
  let vince = {
    name: 'Vince',
    number: Number($('#vince-input').val())
  }
  let kelsey = {
    name: 'Kelsey',
    number: Number($('#kelsey-input').val())
  } 

  let group = [tony, clay, vince, kelsey];
  $.ajax({
    method: "POST",
    url: "/guess",
    data: {group} 
  }).then(function(response){
    console.log('SUCCESS!');
    getInfo();
  })
// This for loop will tell the user if they were higher or lower on their guess
  for (person of group) {
    if(person.number === theRando){
      console.log(`Correct ${person.name}`);
      $('#winner').append(`<p>${person.name}</p>`)
    } else if(person.number < theRando){
      console.log(`Higher ${person.name}`);
    } else {
      console.log(`Lower ${person.name}`)
    };
  }
}; // End of randomNumberGenerator function



function getInfo() {
$.ajax({
  method: 'GET',
  url: '/guess',
}).then(function(response) {
  console.log('Very Nice!');
  randomNumberGenerator(response)

  renderToDom(response);


}) .catch(function(response) {
  console.log('It sucks...');

})
}; // end of function




let clicks = 0;
function totalGuessTracker(){
  clicks ++;
  $('#guess-tracker').empty();
  $('#guess-tracker').append(clicks);

}; // End of totalGuessTracker function





// this function will append the details area to the DOM
function displayDetailsArea() {     
  // this will append history of guess(s) to the guess-history 
  $('#guess-history').append(`<tr><td><p>
  ${$('#clay-input').val()},
  ${$('#tony-input').val()},
  ${$('#vince-input').val()},
  ${$('#kelsey-input').val()}
</p></td></tr>`) // end of append
  }; // end of function


 
// will empty inputs
function emptyInputs() {
  // empty the inputs 
  $('#clay-input').val('');
  $('#tony-input').val('');
  $('#vince-input').val('');
  $('#kelsey-input').val('');
}; // end of function

// this will empty guess history and give a new random number
function resetEverything() {
  theRando = randomNumber(0,25);
  emptyInputs();
  $('#guess-history').empty();
  $('#guess-tracker').empty();
  console.log(theRando);
}; // end of function

// This will display old&new guesses, checks if guesses are correct, display winners
function infoFromServer() {
  $.ajax({
    method: 'GET',
    url: '/guess',
  }).then(function(response){
      console.log('Here are those guesses', response);
      renderSongsToDom(response);
  }).catch(function(response){
      console.log('Didn\'t receive guesses');
  })
}; // End infoFromServer function


/*
## Base Mode

You should generate a random number between 1 and 25 on the server. Add input fields to match the number of people in your group. Each member of your group will submit a guess at the same time. All of the guesses should be sent to the server (POST). The server will check each guess against the random number. After submitting a round of guesses, retrieve all of the previous guesses (GET) and display them on the screen. Let each user know whether their guess was correct, too low or too high. 

- an input field for each of the Players to make a guess *** 
- a submit guesses button (submits all guesses at the same time)
- total guesses made indicator (think of this as rounds in a game)
- details area for the history of guesses for each player (tell them if their last guess was too low or too high)
- if a guess is correct PROMINENTLY Display which player won (make 'em FEEL it)
- if there is a winner, a restart button that tells the server to select a new random number (POST)

Necessary Ingredients
-

AKA Client Demands...

All random number stuff should happen on the server: Generation of the random number upon game start as well as comparisons between guesses and the random correct answer. 

Take a moment to discuss with your team members why this is something that a client may demand.

Once you get it working, style it up, yo!

*/

