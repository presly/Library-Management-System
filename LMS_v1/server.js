// dependencies
var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// main config
var app = express();
app.set('port', process.env.PORT || 1337);
app.use(express.logger());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// app.configure('development', function(){
//     app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
// });

// app.configure('production', function(){
//     app.use(express.errorHandler());
// });

app.configure( function() {
        //parses request body and populates request.body
        app.use( express.bodyParser() );

        //checks request.body for HTTP method overrides
        app.use( express.methodOverride() );

        //perform route lookup based on url and HTTP method
        app.use( app.router );

        //Show all errors in development
        app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
    });


// passport config
var Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// mongoose
mongoose.connect('mongodb://localhost/LMS');

// routes
require('./routes/login')(app);
require('./routes/ListBooks')(app);

app.listen(app.get('port'), function(){
  console.log(("Express server listening on port " + app.get('port')))
});
