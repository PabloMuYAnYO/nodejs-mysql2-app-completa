const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const device = require('express-device');
const { engine } = require('express-handlebars');

// * ROUTER REQUIRES
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/authentication');
const linksRouter = require('./routes/links');

const app = express();

// * OTHER MODULES USAGE
app.use(device.capture())

// * VIEW ENGINE SETUP
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partilasDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

// * MIDDLEWARE's
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// * GLOBAL VARS
app.use((req,res,next) => {

  next();

});

// * PUBLIC DIR
app.use(express.static(path.join(__dirname, 'public')));

// * ROUTES
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/links', linksRouter);
app.use('/authentication', authRouter);



// ! catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// ! error handler
app.use(function(err, req, res, next) {
  // ? set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // ? render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
