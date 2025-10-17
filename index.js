import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// If you want to render all components based on URL, you'd implement React Router
// here, and change the <a href="..."> links in App.js to <Link to="...">.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);