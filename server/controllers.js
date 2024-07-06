const db = require('../db');
const controller = {};

controller.signUp = async (req, res, next) =>{
    const {userName, password} = req.body;
    console.log(req.body);

    if(!userName || !password){
        return res.status(400).json({error: 'missing required fields'});
    }
    const queryText = `
    INSERT INTO "LOGINS" ("userName", "password")
    VALUES ($1, $2)
    RETURNING id, userName;
    `
    ;
    try{
        await db.query(queryText, [userName, password]);
        const newUser = result.rows[0];
        res.status(201).json(newUser);
    }

    catch{
        console.error('Error signing up:', error);
        res.status(500).json({ error: 'An error occurred while signing up' });  
    }
};


controller.createRecipe = async (req, res, next) => {
    console.log("hitting the createRecipe controller");
    const { recipeName, ingredients, instructions, author } = req.body;
    console.log(req.body)

    if (!recipeName || !ingredients || !instructions || !author) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const queryText = `
        INSERT INTO "Recipes" ("recipeName", "ingredients", "instructions", "author")
        VALUES ('${recipeName}', '${ingredients}', '${instructions}', '${author}')
        RETURNING *;
    `;

    try {
        // run query using result from queryText
       console.log("inside try")
        const result = await db.query(queryText);
        console.log(`result: `, result);
        console.log("got past hitting query")
        const newRecipe = result.rows[0];
        console.log(`newRecipe: `, newRecipe);

        // Store the created recipe in res.locals for subsequent middleware or route handlers
        res.locals.recipe = newRecipe;

        // Call next to pass control to the next middleware or route handler
        next();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};





  module.exports = controller;