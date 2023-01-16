import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { tracks } from './tracksData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App
      tracks={tracks}
    />
  </React.StrictMode>
);