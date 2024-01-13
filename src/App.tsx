import { Outlet } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import { useEffect, useState } from 'react'

const App = () => {
  const [path, setPath] = useState('')
  const pathname = window.location.pathname

  useEffect(() => {
    setPath(pathname)
  }, [pathname])

  return (
    <section className="flex flex-col justify-center w-1024 m-auto">
      {!(path === '/login' || path === '/register') && (
        <Nav setPath={setPath} />
      )}
      <Outlet />
    </section>
  )
}

export default App
