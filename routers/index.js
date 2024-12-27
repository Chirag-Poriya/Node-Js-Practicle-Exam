const express = require('express');
const userRouters = require('./userRouter');
const recipeRouters = require('./recipeRouter');
const commentRouters = require('./commentRouters');

const app = express();

app.use('/user', userRouters); 
app.use('/recipes', recipeRouters); 
app.use('/comments', commentRouters); 

module.exports = app;
