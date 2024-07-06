import React, {useState} from 'react';
import RecipeCreator from './RecipeCreator.jsx'

const AppHeader = ({ addRecipe }) => {
    const [showModal, setShowModal] = useState(false);
    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    
    return (
        <header className='app-header'>
        <h1 className='app-title'>Recipe App</h1>
        <p className='app-description'>Welcome to the recipe app</p>
        <button onClick={handleOpen}>New Recipe</button>
        <RecipeCreator show={showModal} handleClose={handleClose} addRecipe={addRecipe} />
        </header>
    )
} 

export default AppHeader;
