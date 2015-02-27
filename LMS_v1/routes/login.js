var passport = require('passport');
var Account = require('../models/account');

module.exports = function (app) {
    
  app.get('/', function (req, res) {
      res.render('index', { user : req.user });
  });

  app.get('/api/v1/register', function(req, res) {
      res.render('register', { });
  });

  /**
   * @api {post} /register register to the app 
   * @apiVersion 0.0.1
   * @apiName registerApp
   * @apiGroup Profile
   *
   * @apiDescription Register to the app and use all functionalities
   *
   * @apiParam {String} username Register username.
   * @apiParam {String} password Register password.
   *
   *
   *
   * @apiSuccessStructure APISuccess
   *
   * @apiErrorStructure DatabaseFailureError
   *
   * @apiDefineErrorStructure DuplicateRecordError
   *
  */

  app.post('/api/v1/register', function(req, res) {
      Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
          if (err) {
            res.send({"Result" : "Sorry. That username already exists. Try again."});
          }

          passport.authenticate('local')(req, res, function () {
            res.send({"Result" : "Successful registration"});
          });
      });
  });

  app.get('/api/v1/login', function(req, res) {
      res.send({"username" : res.username});
  });

  /**
   * @api {post} /login login to the app 
   * @apiVersion 0.0.1
   * @apiName loginApp
   * @apiGroup Profile
   *
   * @apiDescription Login to the app and use all functionalities
   *
   * @apiParam {String} username login username.
   * @apiParam {String} password login password.
   *
   *
   *
   * @apiSuccessStructure APISuccess
   *
   * @apiErrorStructure NotAuthorizedError
   *
  */

  app.post('/api/v1/login', passport.authenticate('local'), function(req, res) {
      res.send({"Status" : "Successful","username" : req.body.username});
  });

  /**
   * @api {get} /logout register to the app 
   * @apiVersion 0.0.1
   * @apiName registerApp
   * @apiGroup Profile
   *
   * @apiDescription Register to the app and use all functionalities
   *
   *
   *
   * @apiSuccessStructure APISuccess
   *
   * @apiErrorStructure DatabaseFailureError
   *
  */

  app.get('/api/v1/logout', function(req, res){
    req.logout();
    res.send("Successful logout!", 200);
  });

  app.get('/api/v1/ping', function(req, res){
      res.send("pong!", 200);
  });
  
};
