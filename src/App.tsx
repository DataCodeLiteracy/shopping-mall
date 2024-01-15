import { Outlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import Nav from './components/Nav/Nav'
import { urlState } from './recoil/url/atom'

const App = () => {
  const path = useRecoilValue(urlState)

  return (
    <section className="flex flex-col w-full min-w-690 max-w-1024 h-full min-h-500 m-auto">
      {!(path === '/login' || path === '/register') && <Nav />}
      <Outlet />
    </section>
  )
}

export default App
