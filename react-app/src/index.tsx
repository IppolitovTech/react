import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ModalState } from './context/ModalContext';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<BrowserRouter>
<Navigation />
<ModalState>
<App />
</ModalState>
</BrowserRouter>
);