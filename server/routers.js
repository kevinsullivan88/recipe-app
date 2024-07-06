const express = require('express');
const router = express.Router();
const db = require('../db'); 
const controller = require('./controllers.js')

//router.post('/api/signup', controllers.signUp);
// router.post('/api/login', controller.login);

router.get('*', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM "Recipes"');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching recipes', error.stack);
        res.status(500).json({ error: 'An error occurred while fetching recipes' });
    }
});


router.delete('/recipe/:id', async (req, res) => {
    const { id } = req.params;
    console.log(`DELETE request received for recipe ID: ${id}`);
    try {
        const result = await db.query('DELETE FROM "Recipes" WHERE id = $1', [id]);
        if (result.rowCount === 0) {
            return res.status(404).send({ error: 'Recipe not found' });
        }
        res.status(200).send({ message: 'Recipe deleted' });
    } catch (error) {
        console.error('Error deleting recipe:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});


router.post('/recipe/create', async (req, res) => {
    console.log("getting into post router");
    const { recipeName, ingredients, instructions, author, image } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO "Recipes" ("recipeName", "ingredients", "instructions", "author", "image") VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [recipeName, ingredients, instructions, author, image]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Error adding recipe:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});




module.exports = router;