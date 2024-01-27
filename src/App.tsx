import { Outlet, useLocation } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import { AuthContextProvider } from './context/AuthContext'

const App = () => {
  const { pathname } = useLocation()

  return (
    <AuthContextProvider>
      <section className="flex flex-col w-full min-w-690 max-w-1024 h-full min-h-500 m-auto">
        {!(pathname === '/login' || pathname === '/register') && <Nav />}
        <Outlet />
      </section>
    </AuthContextProvider>
  )
}

export default App
