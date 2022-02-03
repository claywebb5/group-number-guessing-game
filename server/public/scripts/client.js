$(document).ready(handleReady);


let theRando = randomNumber(0,25);

function handleReady() {
  console.log("jquery is loaded!")
$('#guess-button').on('click', guessButtonDo);
$('#guess-button').on('click', randomNumberGenerator);


}; // end of function

// this happens when guess button is pressed
function guessButtonDo() {
  console.log('Guess works!');

}; // end of loop

// random number generator
function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}



console.log('theRando is:', theRando);



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
    data: {
      guessArray: group
      }
  }).then(function(response){
    console.log('SUCCESS!');

  })

  











  
  
  

// This for loop will tell the user if they were higher or lower on their guess
  for (person of group) {
    if(person.number === theRando){
      alert(`Correct ${person.name}`);
    } else if(person.number < theRando){
      alert(`Higher ${person.name}`);
    } else {
      alert(`Lower ${person.name}`)
    };
  }
} // End of randomNumberGenerator function















// $.ajax({
//   method: "POST",

// })


/*

// this function will append the details area to the DOM
function displayDetailsArea() {
    // this will append history of guess(s) to the guess-history 
    $('#guess-history').append(`<tr><td><p>`
    $('clay-input').val(),
    $('tony-input').val(),
    $('vince-input').val(),
    $('kelsey-input').val(),
  `</p></td></tr>`) // end of append

  // empty the inputs 
    $('clay-input').val(''),
    $('tony-input').val(''),
    $('vince-input').val(''),
    $('kelsey-input').val(),
  

}; // end of function

*/









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