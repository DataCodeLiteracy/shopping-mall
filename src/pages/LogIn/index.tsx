import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthButton from '../../components/AuthButton/AuthButton'
import AuthInput, {
  DEFAULT_INPUT_STYLE
} from '../../components/AuthInput/AuthInput'
import ValidationMessage from '../../components/ValidationMessage/ValidationMessage'
import { loginUser } from '../../firebase'
import useInput from '../../hooks/useInput'
import { isEmailCheck, isPasswordValid } from '../../utils/isValidationCheck'
import {
  STYLE_BORDER_B_BLUE,
  STYLE_BORDER_B_RED,
  STYLE_BUTTON_WHITE
} from '../Register'

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

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()

    try {
      if (!emailInput.isValid && !passwordInput.isValid) {
        await loginUser(emailInput.value, passwordInput.value)

        navigate('/')
      } else {
        alert('모든 정보를 올바르게 입력해주세요.')
      }
    } catch (error) {
      if (typeof error === 'object' && error !== null && 'code' in error) {
        const errorCode = (error as { code: string }).code
        if (errorCode === 'auth/invalid-credential') {
          alert('이메일 또는 비밀번호를 잘못 입력하셨습니다.')
        }
      }
    }
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
              ? STYLE_BORDER_B_BLUE
              : emailInput.isValid
              ? STYLE_BORDER_B_RED
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
              ? STYLE_BORDER_B_BLUE
              : passwordInput.isValid
              ? STYLE_BORDER_B_RED
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
          className={STYLE_BUTTON_WHITE}
          text="회원가입"
          onClick={() => navigate('/register')}
        />
      </form>
    </section>
  )
}

export default LogIn
