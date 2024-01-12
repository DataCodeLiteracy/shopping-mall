import { Outlet } from 'react-router-dom'
import Nav from './components/Nav/Nav'

const App = () => {
  return (
    <section className="flex justify-center w-3/4 bg-black h-30 text-lg">
      <Nav />
      <Outlet />
    </section>
  )
}

export default App
