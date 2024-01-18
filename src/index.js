import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { StateProvider } from './context/StateProvider';
import { InitialState } from './context/InitialState';
import Reducer from './context/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <StateProvider InitialState={InitialState} Reducer={Reducer}>
        <App />
      </StateProvider>
    </Router>
  </React.StrictMode>
);



