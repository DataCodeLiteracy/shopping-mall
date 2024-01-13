import { NavigateFunction } from 'react-router-dom'
import { SetterOrUpdater } from 'recoil'

interface changePathProps {
  setUrlPath: SetterOrUpdater<string>
  navigate: NavigateFunction
  path: string
  replace?: boolean | undefined
}

const changePath = ({
  setUrlPath,
  navigate,
  path,
  replace = false
}: changePathProps) => {
  setUrlPath(path)
  navigate(path, { replace })
}

export default changePath
