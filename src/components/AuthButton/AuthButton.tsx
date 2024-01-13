import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { urlState } from '../../recoil/url/atom'
import changePath from '../../utils/changePath'

type ButtonProps = {
  type?: 'submit' | 'reset' | 'button' | undefined
  className?: string
  text: string
}

const AuthButton = ({
  type = 'submit',
  className = 'w-full p-10 mt-4 rounded-sm bg-blue-500 text-white',
  text
}: ButtonProps) => {
  const navigate = useNavigate()
  const setUrlPath = useSetRecoilState(urlState)
  const path = useRecoilValue(urlState)

  const goToThePage = () => {
    if (path === '/register') {
      changePath({ setUrlPath, navigate, path: '/login', replace: true })
    } else {
      if (text === '로그인') {
        changePath({ setUrlPath, navigate, path: '/', replace: true })
      } else {
        changePath({ setUrlPath, navigate, path: '/register', replace: true })
      }
    }
  }

  return (
    <button type={type} className={className} onClick={goToThePage}>
      {text}
    </button>
  )
}

export default AuthButton
