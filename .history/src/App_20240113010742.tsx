import { Outlet } from 'react-router-dom'
import Nav from './components/Nav/Nav'

const App = () => {
  return (
    <section className="flex flex-col justify-center w-1024 m-auto">
      <Nav />
      <Outlet />
    </section>
  )
}

export default App
