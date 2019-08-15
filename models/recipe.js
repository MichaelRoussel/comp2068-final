// We will need our mongoose library
const mongoose = require(`mongoose`);

// Our schema
const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true
  },
  difficulty: {
    type: Number,
    default: 1
  },
  type: {
    type: String,
    enum: ['PASTA', 'MEAT', 'CASSEROLE', 'BAKING'],
    default: 'PASTA'
  }
}, {
    timestamps: true
  });

// Exporting our Recipe model
module.exports = mongoose.model('Recipe', RecipeSchema);