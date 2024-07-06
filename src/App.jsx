// import React, { useState } from 'react';
// import RecipeHeader from './components/RecipeHeader.jsx'
// import Home from './components/HomePage.jsx'
// import RecipeList from './components/RecipeList.jsx';
// import SignUp from './components/SignUp.jsx';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';




//    const App = () => {
//     console.log("hitting app")
//     return (
//     <Router>
//         <div className = "app">
//           <Route path="/" exact component={HomePage} />
//           <Route path="/signup" component={SignUp} />
//         </div>
//     </Router>
//     );
//   }
  
//   export default App;





// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
// import Home from './components/HomePage.jsx'; // Assuming you have a Home component for your main page
// import SignUp from './components/SignUp.jsx'; // Import your SignUp component here

// const App = () => {
//   return (
//       <Router>
//           <div className="App">
//             <Routes>
//               <Route exact path="/" component={Home} />
//               <Route path="/signup" component={SignUp} />
//             </Routes>
//           </div>
//       </Router>
//   );
// };

// export default App;


import React from 'react';
import Home from './components/HomePage.jsx'

const App = () => {
    return (
        <div className="App">
            <Home />
        </div>
    );
};

export default App;