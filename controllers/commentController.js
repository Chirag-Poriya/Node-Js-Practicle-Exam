const Comment = require('../models/commentSchema');

module.exports.addComment = async (req, res) => {
  try {
    const { content, recipeId } = req.body;
    const comment = new Comment({ content, recipe: recipeId, user: req.user.id });
    await comment.save();
    res.status(201).json({ message: 'Comment added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
