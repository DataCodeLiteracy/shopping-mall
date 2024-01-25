import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import App from './App'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import './index.css'
import Cart from './pages/Cart'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import NewProduct from './pages/NewProduct'
import Product from './pages/Product'
import Register from './pages/Register'

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
        path: 'product/new',
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        )
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
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        )
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
