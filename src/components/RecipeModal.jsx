// import React from 'react';

// const RecipeModal = ({ show, handleClose, recipe }) => {
//     if (!show) return null;

//     const formatText = (text) => {
//         return text.split('\n').map((item, index) => <p key={index}>{item}</p>);
//     };

//     const formatList = (text) => {
//         return text.split('\n').map((item, index) => <li key={index}>{item}</li>);
//     };

//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <span className="close-button" onClick={handleClose}>&times;</span>
//                 <h2>{recipe.recipeName}</h2>
//                 <img src={recipe.image} alt={recipe.recipeName} style={{ width: '300px', height: 'auto' }} />
//                 <h4>Ingredients:</h4>
//                 <ul>
//                     {formatList(recipe.ingredients)}
//                 </ul>
//                 <h4>Instructions:</h4>
//                 <div>
//                     {formatText(recipe.instructions)}
//                 </div>
//                 <p>Written by {recipe.author}</p>
//                 <button onClick={handleClose}>Close</button>
//             </div>
//         </div>
//     );
// };


// const styles = {
// modal: {
//     position: fixed;
//     top: 0,
//     left: 0,
//     width: 100%,
//     height: 100%,
//     background: rgba(0, 0, 0, 0.5),
//     display: flex,
//     justify-content: center,
//     align-items: center,
//     z-index: 1000,
// },

// modal-content: {
//     background: white;
//     padding: 20px;
//     border-radius: 5px;
//     max-width: 600px;
//     width: 100%;
//     position: relative;
//     text-align: left;
//     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
// }

// .close-button {
//     position: absolute;
//     top: 10px;
//     right: 10px;
//     background: none;
//     border: none;
//     font-size: 1.5rem;
//     cursor: pointer;
// }
// }

// export default RecipeModal;



import React from 'react';

const RecipeModal = ({ show, handleClose, recipe }) => {
    if (!show) return null;

    const formatText = (text) => {
        return text.split('\n').map((item, index) => <p key={index}>{item}</p>);
    };

    const formatList = (text) => {
        return text.split('\n').map((item, index) => <li key={index}>{item}</li>);
    };

    return (
        <>
            <style jsx>{`
                .modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }

                .modal-content {
                    background: white;
                    padding: 20px;
                    border-radius: 5px;
                    max-width: 600px;
                    width: 100%;
                    position: relative;
                    text-align: left;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                    max-height: 80vh; /* Set a max height for the modal */
                    overflow-y: auto; /* Make the content scrollable */
                }

                .close-button {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                }
            `}</style>
            <div className="modal">
                <div className="modal-content">
                    <span className="close-button" onClick={handleClose}>&times;</span>
                    <h2>{recipe.recipeName}</h2>
                    <img src={recipe.image} alt={recipe.recipeName} style={{ width: '300px', height: 'auto' }} />
                    <h4>Uploaded by {recipe.author}</h4>
                    <h4>Ingredients:</h4>
                    <ul>
                        {formatList(recipe.ingredients)}
                    </ul>
                    <h4>Instructions:</h4>
                    <div>
                        {formatText(recipe.instructions)}
                    </div>
                    <button onClick={handleClose}>Close</button>
                </div>
            </div>
        </>
    );
};

export default RecipeModal;