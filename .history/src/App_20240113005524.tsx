import { Outlet } from 'react-router-dom'
import Nav from './components/Nav/Nav'

const App = () => {
  return (
    <section className="w-3/4">
      <Nav />
      <Outlet />
    </section>
  )
}

export default App
