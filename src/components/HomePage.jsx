import React from 'react';
import {useState, useEffect} from 'react';
import RecipeList from './RecipeList.jsx';
import RecipeHeader from './RecipeHeader.jsx';

const Home = () => {
    const [recipes, setRecipes] = useState ([]);
    const [showModal, setShowModal] = useState(false);

    const deleteRecipe = async (id) => {
        try{
            const response = await fetch(`api/recipe/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const newRecipes = recipes.filter(recipe => recipe.id !== id);
        setRecipes(newRecipes);

        }
        catch(error){
            console.error('Error deleting recipe:', error);
        }
    }
    const addRecipe = (newRecipe) => {
        setRecipes([...recipes, newRecipe]);
    };

    useEffect (() => {
        console.log("useEffect ran");
        console.log(`recipes: `, recipes);
        const fetchRecipes = async () => {
            try{
                console.log("trying");
                const response = await fetch ('/api/recipes')
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(`data: `, data);
                // update state with the new dataset
                setRecipes(data);
            } catch(error){
                console.log('Error fetching recipes:', error);
            }
        }
            //invoke fetchRecipes to get make this happen on each rerender
            fetchRecipes();
    }, []);

    return (
        <div className="home">
            <RecipeHeader addRecipe={addRecipe} />
            <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
        </div>
    );
}

export default Home;