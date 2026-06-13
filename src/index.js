import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Shto këtë rresht për të ndryshuar title-in
document.title = "Gentiana Mehana | Full Stack Developer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);