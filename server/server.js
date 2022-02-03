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


app.get('/guess', function(req, res){
  res.send(inputArray); // <- this route will return the array in the ()
})

app.post('/guess', (req, res) => {
  console.log("req.body from POST", req.body);

  // send back a status code of 201
  res.sendStatus(201);
});

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})




