import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthButton from '../../components/AuthButton/AuthButton'
import AuthInput, {
  DEFAULT_INPUT_STYLE
} from '../../components/AuthInput/AuthInput'
import ValidationMessage from '../../components/ValidationMessage/ValidationMessage'
import useInput from '../../hooks/useInput'
import { isEmailCheck, isPasswordValid } from '../../utils/isValidationCheck'

const LogIn = () => {
  const emailInput = useInput({
    initialValue: '',
    validator: isEmailCheck,
    type: 'email'
  })
  const passwordInput = useInput({
    initialValue: '',
    validator: isPasswordValid,
    type: 'password'
  })

  const navigate = useNavigate()

  const auth = getAuth()

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()

    try {
      if (!emailInput.isValid && !passwordInput.isValid) {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          emailInput.value,
          passwordInput.value
        )
        const user = userCredential.user
        const accessToken = await user.getIdToken()

        localStorage.setItem('access_token', accessToken)

        navigate('/')
      } else {
        alert('모든 정보를 올바르게 입력해주세요.')
      }
    } catch (error) {}
  }

  return (
    <section className="flex flex-col justify-center w-1/2 h-full max-w-md min-w-96 m-auto">
      <form onSubmit={handleLogin}>
        <AuthInput
          type="email"
          placeholder="이메일"
          onChange={emailInput.handleChange}
          onBlur={emailInput.handleBlur}
          onClick={emailInput.handleTouch}
          className={`${
            emailInput.isTouched && !emailInput.isValid
              ? 'border-b-2 border-blue-500'
              : emailInput.isValid
              ? 'border-b-2 border-red-500'
              : ''
          } ${DEFAULT_INPUT_STYLE}`}
        />
        {emailInput.value === '' && emailInput.isEmpty && (
          <ValidationMessage text="아이디(이메일)을 입력하세요" />
        )}
        {emailInput.isValid && !emailInput.isEmpty && (
          <ValidationMessage text="아이디(이메일)는 이메일 형식으로 입력해주세요." />
        )}
        <AuthInput
          type="password"
          placeholder="비밀번호"
          onChange={passwordInput.handleChange}
          onBlur={passwordInput.handleBlur}
          onClick={passwordInput.handleTouch}
          className={`${
            passwordInput.isTouched && !passwordInput.isValid
              ? 'border-b-2 border-blue-500'
              : passwordInput.isValid
              ? 'border-b-2 border-red-500'
              : ''
          } ${DEFAULT_INPUT_STYLE}`}
        />
        {((passwordInput.isEmpty && passwordInput.isTouched) ||
          passwordInput.isValid) && (
          <ValidationMessage text="비밀번호를 형식에 맞게 입력해주세요." />
        )}
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
