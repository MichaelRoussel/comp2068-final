// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const recipeRoutes = require('./routes/recipes');

// Registering our pageRoutes
// app.use('/', pageRoutes);
app.use('/recipes', recipeRoutes);

// Exporting the changes
module.exports = app;