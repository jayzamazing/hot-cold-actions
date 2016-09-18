var mongoose = require('mongoose');
var FewestGuessesSchema = new mongoose.Schema({
  guess: {
    type: Number,
    required: true
  }
});
var Fewest = mongoose.model('fewest', FewestGuessesSchema);
module.exports = Fewest;
