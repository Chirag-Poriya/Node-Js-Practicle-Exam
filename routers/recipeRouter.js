const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/authentication');
const recipeController = require('../controllers/recipeController'); // Correctly import controller

// Routes
router.get('/', recipeController.getAllRecipes);
router.get('/:id', recipeController.getRecipeById);
router.get('/myRecipes', authenticate, recipeController.getUserRecipes);
router.get('/recipeForm', authenticate, (req, res) => res.render('recipeForm'));
router.post('/', authenticate, recipeController.createRecipe);

module.exports = router;
