var mongoose = require( 'mongoose' );

//Schema
var BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publication : String,
    releaseDate: Date,
    shortDescription : String,
    largeDescription : String,
    imageUrl : String,
    category : String
});

//Model
var BookModel = mongoose.model( 'Book', BookSchema );

module.exports = BookModel;
