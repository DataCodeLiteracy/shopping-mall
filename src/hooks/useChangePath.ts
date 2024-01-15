import { useLocation, useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { urlState } from '../recoil/url/atom'
import { useEffect } from 'react'

interface changePathProps {
  path: string
  replace?: boolean
}

const useChangePath = ({ path, replace = false }: changePathProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const setUrlPath = useSetRecoilState(urlState)

  useEffect(() => {
    setUrlPath(pathname)
  }, [pathname])

  const changePath = () => {
    setUrlPath(path)
    navigate(path, { replace })
  }

  return {
    changePath
  }
}

export default useChangePath
