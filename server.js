//---Init Express Application
const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');


//---Init Mongoose
const mongoose = require('mongoose');


//---Pull in the dictionary data file
const data = require('./data');

//---specify PORT, c9's default PORT = 8080
const port = 8080;  


//---Serves a static file located in ../public
app.use(express.static("public"));
//---JSON Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



//--- connect mongoDB database w/ mongoose
 mongoose.connect('mongodb://'+ process.env.IP + '/spellchecker', {useNewUrlParser: true})  
     .then(()=>console.log("mongoDB connected"));
     
     

//---schema
const mySchema = new mongoose.Schema({
    word: String
});

//---model
const Word = mongoose.model("Word", mySchema);


//---get request  ---- working w/o mongoDB
app.get("/data", function(req, res) {
    const keyword = req.query.word;
    if(Word.hasOwnProperty(keyword)){
        res.send(`YUP! the word: <h4>"${keyword}"</h4> does exist within the dictionary!`);
    }else{
        res.send(`Sorry! But the word: <h3>"${keyword}"</h3> does not exist within the dictionary!`);
    }

});


//---get request for data in mongoDB / mongo shell

// app.get('/data', function (req, res) {

//     // Grab the user input from the url query and assign it to a variable
//     const keyword = req.query.keyword;

    
//     app.get('/data', function (req, res) {

//     const keyword = req.query.keyword;


//     Word.find({ word: keyword }, function (error, word) {
//         // Because we are searching an array of objects, adding the array position is needed
//         if (keyword===keyword) {
//             res.send(`YUP! the word: <h4>"${keyword}"</h4> does exist within the dictionary!`);
//         } else {
//             res.send(`Sorry! But the word: <h3>"${keyword}"</h3> does not exist within the dictionary!`);
//         }
//     });
// });




// app.get('/data', function(req, res){
//     const keyword = req.query.keyword;
    
//     Word.find ({}, function (error, words){
//         if (Word.find ({word : keyword}) === keyword){
//             res.send(`YUP! the word: <h4>"${keyword}"</h4> does exist within the dictionary!`);
//         }
//     })
    
// })




//---PORT listener
app.listen(port, () => console.log(`Example app listening on port ${port}!`));













