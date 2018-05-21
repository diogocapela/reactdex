'use strict';

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 5000;

app.set('port', port);
app.use(express.static(path.join(__dirname, 'client/build')));
/* body-parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
/* cookie-parser */
app.use(cookieParser());
/* morgan */
app.use(morgan('dev'));

const routes = require('./routes.js');

app.use((req, res, next) => {
    next();
});

app.use('/api', routes);

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => `Server running on port ${port}`);