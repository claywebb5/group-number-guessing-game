// <SERVER SETUP>---------------------------------------------------------------

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
// const inputArray =[{
  //   clay: "clay",
  //   tony: "tony",
  //   vince: "vince"
  // }];
// </SERVER SETUP>-------------------------------------------------------------

// <FUNCTIONS/VARIABLES> ------------------------------------------------------

// random number generator
function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
};

let newGuesses = [];
let oldGuesses = [];
let winners = [];
let theRando = randomNumber(0,25);
// </FUNCTIONS/VARIABLES> -----------------------------------------------------



// <POST LAND>----------------------------------------------------------------
app.post('/guess', (req, res) => {
  console.log("req.body from POST", req.body);
  
  console.log('pushing old guesses to the old array (if applicable)')
  console.log(newGuesses, '= newGuesses')
  oldGuesses.push(newGuesses.group);
  // {[{name: clay, number: #}, {name:Tony, number: #}, {name: Vince, number: #}, {name:Kelsey, number: #}]}
  
  console.log("added new guesses to the new guesses array")
  newGuesses = req.body;
  
  // define theRando by calling randomNumber
  randomNumber();
  

  console.log('LOOK HERE: before pop', oldGuesses)
    oldGuesses.flat(Infinity);
  console.log('LOOK HERE: after pop', oldGuesses)

  console.log('old guesses', oldGuesses);
  console.log('new guesses', newGuesses);
  console.log('winners', winners);
  console.log('theRando', theRando);
  // send back a status code of 201
  res.sendStatus(201);
});
//</POST LAND>--------------------------------------------------------------


//<GET LAND>----------------------------------------------------------------
app.get('/guess', function(req, res){
  res.send(inputArray); // <- this route will return the array in the ()
})


//<GET LAND>----------------------------------------------------------------


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})




