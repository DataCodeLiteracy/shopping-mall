import { useEffect } from 'react'
import useChangePath from '../../hooks/useChangePath'

const Home = () => {
  const { changePath: checkRootPath } = useChangePath({
    path: '/',
    replace: true
  })

  useEffect(() => {
    checkRootPath()
  }, [])

  return <div>Home</div>
}

export default Home
