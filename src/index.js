import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './store'
import './index.css';
import './tailwind.css';
import App from './App';
import { BrowserRouter, Routes, Route, Router, createBrowserRouter, RouterProvider } from 'react-router-dom'; // Changed import to include Routes

import { PersistGate } from 'redux-persist/integration/react';
import Typing from './components/Games/Typing/Typing';
import router from './router';


const root = createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Wrap App with PersistGate */}
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}></RouterProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);