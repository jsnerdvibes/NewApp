import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Search from './Components/Search/Search.jsx'
import Home from './Components/Home/Home.jsx'


const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children:[

      {
        path:'/Search/:topic',
        element : <Search />
      },
      {
        path:'/',
        element : <Home />
      }

    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>


    <RouterProvider router={router} />

  </StrictMode>,
)
