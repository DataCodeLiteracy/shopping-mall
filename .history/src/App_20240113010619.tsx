import { Outlet } from 'react-router-dom'
import Nav from './components/Nav/Nav'

const App = () => {
  return (
    <section className="flex flex-col justify-center w-3/4 m-auto bg-black h-30 text-lg">
      <Nav />
      <Outlet />
    </section>
  )
}

export default App
