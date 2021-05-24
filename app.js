const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cors = require('cors');
const userRouter = require('./routes/user');
const countryRouter = require('./routes/country');
const cityRouter = require('./routes/city');
const wishRouter = require('./routes/wish');
const initDatabase = require('./database');

initDatabase();
const app = express();

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(express.json({limit: "2mb"}));

app.use('/user', userRouter);
app.use('/country', countryRouter);
app.use('/city', cityRouter);
app.use('/wish', wishRouter);

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

module.exports = app;
