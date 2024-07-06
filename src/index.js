import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";


// // tells react to render the APP in the root ID mentioned in index.html

document.addEventListener('DOMContentLoaded', () => {
  console.log("index hit");
  const container = document.getElementById('root');
  if (container) {
    console.log("rendering")
    const root = createRoot(container);
    root.render(<App />);
  }
});


