const router = require('express').Router();
const { Recipe } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const recipeData = await Recipe.create(req.body);
        res.status(200).json(recipeData);
    } catch (err){
        res.status(400).json(err)
    }
});

module.exports = router;