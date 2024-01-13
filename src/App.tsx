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
    <section className="flex flex-col w-full min-w-690 max-w-1024 h-full min-h-500 m-auto">
      {!(path === '/login' || path === '/register') && (
        <Nav setPath={setPath} />
      )}
      <Outlet />
    </section>
  )
}

export default App
