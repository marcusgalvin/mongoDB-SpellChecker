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













// //require express/mongoose

// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');

// //connect to PORT
// const port = 8080;


// //middleware that serves static file (public)
// app.use(express.static('public'));  


// //connect mongoDB database w/ mongoose
// mongoose.connect('mongodb://'+ process.env.IP + '/spellchecker', {useNewUrlParser: true})  
//     .then(()=>console.log("mongoDB connected"));

// var wordModel = require('./data')

// word.find


// var wordSchema = new mongoose.Schema({
//   word: String
// });


// var wordModel = mongoose.model('wordModel', wordSchema);


// wordModel.find({ word : "apple" })
//     .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
 
// })


// app.get('/', function(req, res) {
//     // console.log(req.query.word);

    
//     });


// app.listen(port, () => console.log(`Example app listening on port ${port}!`));


// // const wordSchema = new mongoose.Schema({
// //     word: String
// // });


// // const Dict = mongoose.model("Dict", schema);  //set constant Dict to equall the model



// // app.get('/data', function (req, res) {
    
// //     Dict.find({}, function (error, Dicts) {           // Check for any errors and display them in the console

// //         if (error) {
// //             console.log('Error with get request');
// //             console.log(error);
// //         } else {
// //             res.send(Dicts);
// //         }
// //     });
// // });








// // app.get('/api', function (req, res){    //req is input to server , req is output
// //     const name = req.query.name;    //recive query from brownser so is url type ?name = marcus and it will show hello marcus
// //     const email = req.query.email;
// //     console.log(name);
// //     console.log(email);
// //     res.send("Hello" + name + "!" + "youre email is: " + email);  //need to send this to browser
    
// //  });
 
 
// //  app.get("/createCats", function(req, res){
     
// //      const name = req.query.name; 
     
// //      const kitty = new Cat({ name })  //takes name  variable from the line above
// //      kitty.save().then(() => console.log ("named saved"));  //saves and log cat name to console
     
     
// //      res.send("hello, how are you " + name );   //send back to server
// //  })
 
 
 

