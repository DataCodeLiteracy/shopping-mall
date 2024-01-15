import { useEffect } from 'react'
import useChangePath from '../../utils/useChangePath'

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
