import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import NavBar from './components/NavBar';

import {store} from './redux/store'

// After
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
    <Provider store={store}>
      <NavBar />
      
      <App/>
    </Provider>
  </BrowserRouter >);
