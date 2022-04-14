var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const User = require('./models/User.models');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);



app.get('/', function(req, res, next) {
  res.render('index', { title: 'Favorites of Miami' });
});

app.get('/users', function(req, res, next) {
  User.find()
  .then(function(newUsers){
  res.render('users', {newUsers: newUsers});
  })
  .catch(function(error){
    console.log(error)
  })  
});

app.get('/users/:userid', function(req, res, next) {
  User.findById(req.params.userid)
  .then(function(foundUser){
  res.render('details', {foundUser: foundUser});
  })
  .catch(function(error){
    console.log(error)
  })  
});

app.get('/favorites', function(req, res, next) {
  User.find()
  .then(function(userFavs){
  res.render('favorites', {userFavs: userFavs});
  })
  .catch(function(error){
    console.log(error)
  })
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



mongoose
  .connect('mongodb://localhost/DOhackathon') 
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

module.exports = app;
