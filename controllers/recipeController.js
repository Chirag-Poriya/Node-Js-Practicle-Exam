const Recipe = require('../models/recipeSchema');

exports.createRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions } = req.body;
    const recipe = new Recipe({ title, ingredients, instructions, user: req.user.id });
    await recipe.save();
    res.status(201).json({ message: 'Recipe created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
exports.getRecipeById = async (req, res) => {
    // Function implementation
  };
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate('user');
    res.render('recipeList', { recipes });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getUserRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ user: req.user.id }).populate('user');
    res.render('myRecipes', { recipes });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
    // createRecipe,
    // getAllRecipes,
    // getRecipeById,
    // getUserRecipes
  };
  