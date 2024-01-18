import { Outlet } from 'react-router-dom'
import Nav from './components/Nav/Nav'

const App = () => {
  return (
    <section>
      <Nav />
      <Outlet />
    </section>
  )
}

export default App
