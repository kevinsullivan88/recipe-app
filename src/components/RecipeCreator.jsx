import React, { useState } from 'react';


const RecipeCreator = ({ show, handleClose, addRecipe }) => {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState('');
    console.log(`addRecipe: `, addRecipe)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newRecipe = { recipeName, ingredients, instructions, author, image };
        try {
            console.log("getting into the try of handleSubmit")
            const response = await fetch('/api/recipe/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newRecipe)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            addRecipe(data);
            handleClose();
        } catch (error) {
            console.error('Error adding recipe:', error);
        }
    };

    if (!show) return null;

    return (
        <div className="modal" style={styles.modal}>
            <div className="modal-content" style={styles.modalContent}>
                <span className="close-button" style={styles.closeButton} onClick={handleClose}>&times;</span>
                <h2>Add New Recipe</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>
                            Recipe Name:
                            <input type="text" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} required style={styles.input} />
                        </label>
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>
                            Ingredients:
                            <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required style={styles.textarea} />
                        </label>
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>
                            Instructions:
                            <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required style={styles.textarea} />
                        </label>
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>
                            Author:
                            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required style={styles.input} />
                        </label>
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>
                            Photo:
                            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required style={styles.input} />
                        </label>
                    </div>
                    <button type="submit" style={styles.button}>Add Recipe</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    modal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        width: '90%',
        maxWidth: '600px',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        fontSize: '20px',
        cursor: 'pointer',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        padding: '8px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    textarea: {
        width: '100%',
        height: '100px', // default height
        padding: '8px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        resize: 'vertical',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
        alignSelf: 'flex-start',
    }
};

//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <span className="close-button" onClick={handleClose}>&times;</span>
//                 <h2>Add New Recipe</h2>
//                 <form onSubmit={handleSubmit}>
//                     <ul>
//                         <p>
//                     <label>
//                         Recipe Name: 
//                         <input type="text" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} required />
//                     </label>
//                         </p>
//                         <p>
//                     <label>
//                         Ingredients:
//                         <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
//                     </label>
//                         </p>
//                         <p>
//                     <label>
//                         Instructions:
//                         <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
//                     </label>
//                         </p>
//                         <p>
//                     <label>
//                         Author:
//                         <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
//                     </label>
//                         </p>
//                         <p>
//                     <label>
//                         Image URL:
//                         <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
//                     </label>
//                         </p>
//                     <button type="submit">Add Recipe</button>
//                     </ul>
//                 </form>
//             </div>
//         </div>
//     );
// };

export default RecipeCreator;