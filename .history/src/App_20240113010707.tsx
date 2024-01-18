import { Outlet } from 'react-router-dom'
import Nav from './components/Nav/Nav'

const App = () => {
  return (
    <section className="flex flex-col justify-center w-3/4 p-30 m-auto h-30">
      <Nav />
      <Outlet />
    </section>
  )
}

export default App
