var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./config.js');
var Fewest = require('./fewest_guesses');
var app = express();


app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
//function to get fewest-guesses
app.get("/fewest-guesses", function(request, response) {
    Fewest.findOne({}, function(err, guess) {
        response.status(201).json(guess);
    });
});
//function to add guess only if stored guess is less than the guess coming in
app.post("/fewest-guesses", function(request, response) {
    Fewest.findOne({}, function(err, storedGuess) {
        if (storedGuess && request.body.guess < storedGuess.guess) {
            Fewest.findOneAndUpdate({}, {
                    guess: request.body.guess
                }, {
                    new: true,
                    upsert: true,
                    setDefaultsOnInsert: true
                },
                function(err, guess) {
                    response.sendStatus(201);
                });
        } else {
            response.sendStatus(201);
        }
    });

});
/*
 * Function to get mongoose connection started and node running
 */
function runServer(callback) {
    //connect to database using what is stored in config file
    mongoose.connect(config.DATABASE_URL, function(err) {
        //if there is any kind of error
        if (err && callback) {
            //pass the error to the callback
            return callback(err);
        }
        //start listening on specified port for requests
        app.listen(config.PORT, function() {
            console.log('Listening on localhost:' + config.PORT);
            //perform callback
            if (callback) {
                callback();
            }
        });
    });
}
//turn into executable and module, if is run directly, otherwise server can be started differently
if (require.main === module) {
    //run this function
    runServer(function(err) {
        //if there are any errors, pass to console
        if (err) {
            console.error(err);
        }
    });
}
//export for testing
exports.app = app;
