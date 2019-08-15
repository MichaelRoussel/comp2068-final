// Our router module
const router = require('express').Router();

// Our controller
const RecipesController = require('../controllers/recipesController');

// Our routes
router.get(`/`, RecipesController.index);
router.get(`/:id`, RecipesController.show);
router.post(`/`, RecipesController.create);
router.post(`/update`, RecipesController.update);
router.post(`/destroy`, RecipesController.destroy);

// We have to export our changes
module.exports = router;