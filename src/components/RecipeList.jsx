

// import React, { useState } from 'react';
// import RecipeModal from './RecipeModal.jsx';

// const RecipeList = ({ recipes, deleteRecipe }) => {
//     const [selectedRecipe, setSelectedRecipe] = useState(null);
//     const [showModal, setShowModal] = useState(false);

//     const handleOpenModal = (recipe) => {
//         setSelectedRecipe(recipe);
//         setShowModal(true);
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);
//         setSelectedRecipe(null);
//     };

//     return (
//         <div className="recipe-list">
//             {recipes.map((recipe) => (
//                 <div className="recipe-preview" key={recipe.id}>
//                     <h3>{recipe.recipeName}</h3>
//                     <img src={recipe.image} alt={recipe.recipeName} style={{ width: '200px', height: 'auto' }} />
//                     <p>Uploaded by {recipe.author}</p>
//                     <button onClick={() => handleOpenModal(recipe)}>View Recipe</button>
//                     <button>Edit</button>
//                     <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
//                 </div>
//             ))}
//             {selectedRecipe && (
//                 <RecipeModal
//                     show={showModal}
//                     handleClose={handleCloseModal}
//                     recipe={selectedRecipe}
//                 />
//             )}
//         </div>
//     );
// };

// export default RecipeList;


import React, { useState } from 'react';
import RecipeModal from './RecipeModal.jsx';

const RecipeList = ({ recipes, deleteRecipe }) => {
    console.log(recipes);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = (recipe) => {
        setSelectedRecipe(recipe);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedRecipe(null);
    };

    return (
        <>
            <style jsx>{`
                .recipe-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    justify-content: center;
                    padding: 20px;
                }

                .recipe-preview {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    padding: 10px;
                    width: 200px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    transition: transform 0.2s;
                }

                .recipe-preview:hover {
                    transform: scale(1.05);
                }

                .recipe-preview img {
                    max-width: 100%;
                    border-radius: 5px;
                }

                .recipe-preview button {
                    margin: 5px;
                    padding: 5px 10px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.2s;
                }

                .recipe-preview button:hover {
                    background-color: #0056b3;
                }
            `}</style>
            <div className="recipe-list">
                {recipes.map((recipe) => (
                    <div className="recipe-preview" key={recipe.id}>
                        <h3>{recipe.recipeName}</h3>
                        <img src={recipe.image} alt={recipe.recipeName} style={{ width: '150px', height: '150px' }} />
                        <p>Uploaded by {recipe.author}</p>
                        <button onClick={() => handleOpenModal(recipe)}>View Recipe</button>
                        <button>Edit</button>
                        <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
                    </div>
                ))}
                {selectedRecipe && (
                    <RecipeModal
                        show={showModal}
                        handleClose={handleCloseModal}
                        recipe={selectedRecipe}
                    />
                )}
            </div>
        </>
    );
};

export default RecipeList;