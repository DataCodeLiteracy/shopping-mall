import { Outlet, useLocation } from 'react-router-dom'
import Nav from './components/Nav/Nav'

const App = () => {
  const { pathname } = useLocation()

  return (
    <section className="flex flex-col w-full min-w-690 max-w-1024 h-full min-h-500 m-auto">
      {!(pathname === '/login' || pathname === '/register') && <Nav />}
      <Outlet />
    </section>
  )
}

export default App
