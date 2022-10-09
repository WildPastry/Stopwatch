import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { StrictMode } from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
