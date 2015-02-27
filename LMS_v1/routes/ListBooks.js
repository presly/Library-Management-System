
//Router

module.exports = function(app) {
    
    var BookModel = require('../models/ListBooks');

    //Get a list of all books
      /**
       * @api {get} /books list all the books
       * @apiVersion 0.0.1
       * @apiName listBooks
       * @apiGroup Books
       *
       * @apiDescription List all the books in the library
       *
       *
       *
       * @apiSuccessStructure APISuccess
       *
       * @apiErrorStructure DatabaseFailureError
       *
       */

    app.get( '/api/v1/books', function( request, response ) {

        var query = BookModel.find({}).select('title author imageUrl category');
        query.exec(function (err, books) {
            if (err) {
                console.log('error1');
                //return functions.notifyError(res, 'DatabaseFailure', 5001, 500, err.message);
            } else if (!books.length) {
                console.log('error2');
                //functions.notifyError(res, 'NoRecordsFound', 1006, 404, 'There were no jobs in the database');
            } else {
                return response.send(books);
            }
        });
    });

    //Insert a new book
      /**
       * @api {post} /books Add a book to the library
       * @apiVersion 0.0.1
       * @apiName insert book
       * @apiGroup Books
       *
       * @apiDescription add book to the library
       *
       * @apiParam {String} title book title
       * @apiParam {String} author book Author.
       * @apiParam {String} publication book title
       * @apiParam {String} releaseDate book Author.
       * @apiParam {String} shortDescription book shortDescription
       * @apiParam {String} largeDescription book largeDescription.
       * @apiParam {String} imageUrl book imageUrl
       * @apiParam {String} category book category.
       *
       *
       *
       * @apiSuccessStructure APISuccess
       *
       * @apiErrorStructure NotAuthorizedError
       *
       * @apiErrorStructure DatabaseFailureError
       *
       */

    app.post( '/api/v1/books', function( request, response ) {
        
        if (request.user) {
            var imgUrl = "http://www.readcwbooks.com/books.jpg";

            var book = new BookModel({
                title: request.body.title,
                author: request.body.author,
                publication: request.body.publication,
                releaseDate: request.body.releaseDate,
                shortDescription : request.body.shortDescription,
                largeDescription : request.body.largeDescription,
                imageUrl : imgUrl,
                category : request.body.category
                //request.body.imageUrl
            });

            //check required fields / validation

            book.save( function( err ) {
                if( !err ) {
                    console.log( 'created' );
                    return response.send( book );
                } else {
                    console.log( err );
                    return response.send('ERROR');
                }
            });
        } else {
            return response.send('Not Authorised');
        }
    });

    //Get a single book by id
    app.get( '/api/v1/books/:id', function( request, response ) {
        return BookModel.findById( request.params.id, function( err, book ) {
            if( !err ) {
                return response.send( book );
            } else {
                console.log( err );
                return response.send('ERROR');
            }
        });
    });

    //Update a book
    app.put( '/api/v1/books/:id', function( request, response ) {
        return BookModel.findById( request.params.id, function( err, book ) {
            book.title = request.body.title;
            book.author = request.body.author;
            book.releaseDate = request.body.releaseDate;

            return book.save( function( err ) {
                if( !err ) {
                    console.log( 'book updated' );
                    return response.send( book );
                } else {
                    console.log( err );
                    return response.send('ERROR');
                }
            });
        });
    });

    //Delete a book
    app.delete( '/api/v1/books/:id', function( request, response ) {
        BookModel.findById( request.params.id, function( err, book ) {
            return book.remove( function( err ) {
                if( !err ) {
                    console.log( 'Book removed' );
                    return response.send( '' );
                } else {
                    console.log( err );
                    return response.send('ERROR');
                }
            });
        });
    });
 }

