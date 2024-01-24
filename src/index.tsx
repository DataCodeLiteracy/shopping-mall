import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LogIn from './pages/LogIn'
import Register from './pages/Register'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'
import app from './firebase'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'product/:id',
        element: <Product />
      },
      {
        path: 'login',
        element: <LogIn />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'cart',
        element: <Cart />
      }
    ]
  }
])

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

const root: ReactDOM.Root = ReactDOM.createRoot(rootElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
)
