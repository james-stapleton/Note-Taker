const express = require('express');

const noteRoutes = require('./api/note-routes.js');

const app = express();

app.use('/api', noteRoutes);


module.exports = app;
