import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Login from './routes/Login.jsx';
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos.jsx';
import Sobre from './routes/Sobre.jsx';
import Error from './routes/Error.jsx';




  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,


      children:[
        {path: '/', element: <Home /> },
        {path: '/home', element: <Home /> },
        {path: '/produtos', element: <Produtos /> },
        {path: '/sobre', element: <Sobre /> },
        {path: '/login', element: <Login /> },

      ]
      
    }
  ])








ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
  
)
