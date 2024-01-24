import { Outlet, useLocation } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import { UserContext } from './context/AuthContext'

const App = () => {
  const { pathname } = useLocation()

  return (
    <UserContext>
      <section className="flex flex-col w-full min-w-690 max-w-1024 h-full min-h-500 m-auto">
        {!(pathname === '/login' || pathname === '/register') && <Nav />}
        <Outlet />
      </section>
    </UserContext>
  )
}

export default App
