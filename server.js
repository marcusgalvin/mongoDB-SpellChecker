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
const dictionaryWords = mongoose.model("Word", mySchema);


// ---get request
app.get("/data", function(req, res) {
    const keyword = req.query.word;
    if(data.hasOwnProperty(keyword)){
        res.send(`YUP! the word: <h4>"${keyword}"</h4> does exist within the dictionary!`);
    }else{
        res.send(`Sorry! But the word: <h3>"${keyword}"</h3> is not a real word`);
    }

});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));













