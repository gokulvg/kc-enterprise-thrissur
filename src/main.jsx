import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Home from './components/Home.jsx';

import Login from './components/Login.jsx';
import { ChakraProvider } from '@chakra-ui/react'
import Category from './components/Category.jsx';
import ItemList from './components/ItemList.jsx';
import SingleProdcut from './components/shared/SingleProdcut.jsx';
import SecureRoute from './components/shared/SecureRoute.jsx';
import Body from './components/Body.jsx';
import AboutUs from './components/AboutUs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:<SecureRoute>
          <Body />
        </SecureRoute> 
          
      },
      {
        path: "home",
        element: <SecureRoute>
        <Home />
      </SecureRoute>
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "category",
        element:<SecureRoute>
          <Category />
        </SecureRoute> 
      },
      {
        path: "category/:categoryId",      
        element:<SecureRoute>
        <ItemList />
      </SecureRoute> 
      },
      {
        path: "category/:categoryId/product/:productId",      
        element:<SecureRoute>
        <SingleProdcut />
      </SecureRoute> 
      },
      {
        path: "about-us",       
        element:<SecureRoute>
        <AboutUs />
      </SecureRoute> 
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
