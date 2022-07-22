import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { UserProvider } from './contexts/Usercontext';
import { Categoriesprovider } from './contexts/categoriescontext';
import { Cartprovider } from './contexts/cartcontext';
import { PreviewProvider } from './contexts/Previewcontext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <Categoriesprovider>
        <Cartprovider>
          <PreviewProvider>
            <App />
          </PreviewProvider>
    </Cartprovider>
    </Categoriesprovider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
