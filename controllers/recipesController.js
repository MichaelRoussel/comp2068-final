const Recipe = require('../models/recipe');

exports.index = (req, res) => {
  Recipe.find()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(404).send(err));
};


exports.show = (req, res) => {
  Recipe.findOne({
    _id: req.params.id
  })
    .then(recipe => res.status(200).json(recipe))
    .catch(err => res.status(404).json(err));
};


exports.create = async (req, res) => {
  Recipe.create(req.body)
    .then(() => res.status(200).json({ success: "New recipe created" }))
    .catch(err => res.status(404).json(err));
};


exports.update = (req, res) => {
  Recipe.updateOne({
    _id: req.body.id
  }, req.body, {
      runValidators: true
    })
    .then(() => res.status(200).json({ success: "Recipe updated" }))
    .catch(err => res.status(404).json(err));
};


exports.destroy = (req, res) => {
  Recipe.deleteOne({
    _id: req.body.id
  })
    .then(() => res.status(200).json({ success: "Recipe deleted" }))
    .catch(err => res.status(404).json(err));
};