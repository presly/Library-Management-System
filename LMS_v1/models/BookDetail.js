var mongoose = require( 'mongoose' );

var BookDetailSchema = new mongoose.Schema({
    title: String,
    author: String,
    releaseDate: Date,
    description : String,
    imageUrl : String
});

var BookDetailModel = mongoose.model('BookDetail',BookDetailSchema);

module.exports = BookDetailModel;
