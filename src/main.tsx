import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoutesFromElements, Route } from 'react-router';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import ProfilePage from './ProfilePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<App />} />
      <Route path="/profile/:id" element={<ProfilePage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
