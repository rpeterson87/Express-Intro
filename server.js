// in server.js

// Require modules
const express = require('express');
let name = 'Ryan Peterson'
// Create the Express app
const app = express();
	
// Configure the app (app.set)
	
	
// Mount middleware (app.use)
	
	
// Mount routes
// the first req is the user the res if the response from the server
// app.get('/about-me', function(req, res) {
//     res.send(`<h1>Hello World, I am ${name}!</h1>`);
//   });

 app.post('/cars', function(req, res){
   res.send('Thanks for the new cars')
 })



// Tell the app to listen on port 4000
app.listen(4000, function() {
    console.log('Listening on port 4000');
});