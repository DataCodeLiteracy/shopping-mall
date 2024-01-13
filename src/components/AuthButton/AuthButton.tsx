'use client'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
  const [pathName, setPathName] = useState('')

  useEffect(() => {
    setPathName(window.location.pathname)
  }, [pathName])

  const goToThePage = () => {
    if (navigate) {
      if (pathName === '/register') {
        navigate('/login')
      } else {
        text === '로그인' ? navigate('/') : navigate('/register')
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
