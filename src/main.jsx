import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import Basket from './pages/Basket.jsx';
import Shopping from './pages/Shopping.jsx';
import Skidka from './pages/Skidka.jsx';
import LoginPage from './pages/LoginPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/category/:slug",
        element: <CategoryPage />
      },
      {
        path: "/basket",
        element: <Basket />
      },
      {
        path: "/shopping",
        element: <Shopping />
      },
      {
        path: "/skidka",
        element: <Skidka />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
