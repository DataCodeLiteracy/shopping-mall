import { Outlet } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { urlState } from './recoil/url/atom'

const App = () => {
  const pathname = window.location.pathname

  const setUrlPath = useSetRecoilState(urlState)
  const path = useRecoilValue(urlState)

  useEffect(() => {
    setUrlPath(pathname)
  }, [pathname])

  return (
    <section className="flex flex-col w-full min-w-690 max-w-1024 h-full min-h-500 m-auto">
      {!(path === '/login' || path === '/register') && <Nav />}
      <Outlet />
    </section>
  )
}

export default App
