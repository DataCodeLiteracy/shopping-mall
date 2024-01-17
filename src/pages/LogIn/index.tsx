import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { ChangeEvent, FormEvent, useState } from 'react'
import AuthButton from '../../components/AuthButton/AuthButton'
import AuthInput from '../../components/AuthInput/AuthInput'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const auth = getAuth()

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user
      const accessToken = await user.getIdToken()

      localStorage.setItem('access_token', accessToken)

      navigate('/')
    } catch (error) {}
  }

  return (
    <section className="flex flex-col justify-center w-1/2 h-full max-w-md min-w-96 m-auto">
      <form onSubmit={handleLogin}>
        <AuthInput
          type="email"
          placeholder="이메일"
          onChange={handleChangeEmail}
        />
        <AuthInput
          type="password"
          placeholder="비밀번호"
          onChange={handleChangePassword}
        />
        <AuthButton text="로그인" />
        <hr className="mt-4" />
        <AuthButton
          type="button"
          className="w-full p-10 mt-4 border border-solid border-gray-400 rounded-sm bg-white"
          text="회원가입"
          onClick={() => navigate('/register')}
        />
      </form>
    </section>
  )
}

export default LogIn
