// import React, { useState } from 'react';

// const SignUp = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSignUp = async (e) => {
//         e.preventDefault();
        
//         try {
//             const response = await fetch('/api/signup', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ username, password }),
//             });

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const data = await response.json();
//             console.log('User registered:', data);
//             // Optionally, redirect to another page upon successful registration
//         } catch (error) {
//             setError('Error registering user');
//             console.error('Error registering user:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Sign Up</h2>
//             {error && <p>{error}</p>}
//             <form onSubmit={handleSignUp}>
//                 <label>
//                     Username:
//                     <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
//                 </label>
//                 <label>
//                     Password:
//                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                 </label>
//                 <button type="submit">Sign Up</button>
//             </form>
//         </div>
//     );
// };

// export default SignUp;