import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile
} from 'firebase/auth'
import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthButton from '../../components/AuthButton/AuthButton'
import AuthInput, {
  DEFAULT_INPUT_STYLE
} from '../../components/AuthInput/AuthInput'
import ValidationMessage from '../../components/ValidationMessage/ValidationMessage'
import ValidationMessages from '../../components/ValidationMessage/ValidationMessages'
import useInput from '../../hooks/useInput'
import {
  isEmailCheck,
  isNameCheck,
  isPasswordCheckValid,
  isPasswordValid,
  isPhoneCheck
} from '../../utils/isValidationCheck'

const Register = () => {
  const navigate = useNavigate()

  const emailInput = useInput({
    initialValue: '',
    validator: isEmailCheck,
    type: 'email'
  })
  const passwordInput = useInput({
    initialValue: '',
    validator: isPasswordValid,
    type: 'password',
    additionValue: emailInput.value
  })
  const passwordCheckInput = useInput({
    initialValue: '',
    validator: isPasswordCheckValid,
    type: 'passwordCheck',
    additionValue: passwordInput.value
  })
  const nameInput = useInput({
    initialValue: '',
    validator: isNameCheck,
    type: 'name'
  })
  const phoneInput = useInput({
    initialValue: '',
    validator: isPhoneCheck,
    type: 'phone'
  })

  const auth = getAuth()

  const handleSubmitRegister = async (e: FormEvent) => {
    e.preventDefault()
    try {
      if (
        !emailInput.isValid &&
        !passwordInput.isValid &&
        !passwordCheckInput.isValid &&
        !nameInput.isValid &&
        !phoneInput.isValid &&
        passwordCheckInput.value.length !== 0 &&
        nameInput.value.length !== 0 &&
        phoneInput.value.length !== 0
      ) {
        await createUserWithEmailAndPassword(
          auth,
          emailInput.value,
          passwordInput.value
        )
        if (auth.currentUser) {
          await updateProfile(auth.currentUser, {
            displayName: nameInput.value,
            photoURL: '/images/user.png'
          })
        }
        navigate('/login')
      } else {
        alert('모든 정보를 올바르게 입력해주세요.')
      }
    } catch (error) {
      if (typeof error === 'object' && error !== null && 'code' in error) {
        const errorCode = (error as { code: string }).code
        if (errorCode === 'auth/email-already-in-use') {
          alert('이미 존재하는 이메일입니다.')
        }
      }
    }
  }

  return (
    <section className="flex flex-col justify-center w-1/2 max-w-md min-w-96 h-full m-auto">
      <p className="mb-4 font-bold text-sm">회원정보를 입력해주세요</p>
      <form onSubmit={handleSubmitRegister}>
        <AuthInput
          type="email"
          placeholder="아이디(이메일)"
          name="email"
          value={emailInput.value}
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
          <ValidationMessage text="이메일을 입력하세요" />
        )}
        {emailInput.isValid && !emailInput.isEmpty && (
          <ValidationMessage text="이메일을 올바르게 입력해주세요." />
        )}
        <AuthInput
          type="password"
          placeholder="비밀번호"
          name="password"
          value={passwordInput.value}
          onChange={passwordInput.handleChange}
          onClick={passwordInput.handleTouch}
          onBlur={passwordInput.handleBlur}
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
          <ValidationMessages>
            <ValidationMessage text="X 영문/숫자/특수문자 2가지 이상 조합 (8~20자)" />
            <ValidationMessage text="X 3개 이상 연속되거나 동일한 문자/숫자 제외" />
            <ValidationMessage text="X 아이디(이메일) 제외" />
          </ValidationMessages>
        )}
        <AuthInput
          type="password"
          placeholder="비밀번호 확인"
          name="passwordCheck"
          value={passwordCheckInput.value}
          onChange={passwordCheckInput.handleChange}
          onBlur={passwordCheckInput.handleBlur}
          onClick={passwordCheckInput.handleTouch}
          className={`${
            !passwordCheckInput.isEmpty &&
            passwordCheckInput.isTouched &&
            !passwordCheckInput.isValid
              ? 'border-b-2 border-blue-500'
              : passwordCheckInput.isValid ||
                (passwordCheckInput.isEmpty && passwordCheckInput.isTouched)
              ? 'border-b-2 border-red-500'
              : ''
          } ${DEFAULT_INPUT_STYLE}`}
        />
        {!passwordCheckInput.isEmpty && passwordCheckInput.isValid && (
          <ValidationMessage text="X 새 비밀번호가 일치하지 않습니다." />
        )}
        {passwordCheckInput.isEmpty && passwordCheckInput.isTouched && (
          <ValidationMessage text="X 확인을 위해 새 비밀번호를 다시 입력해주세요." />
        )}
        <AuthInput
          type="text"
          placeholder="이름"
          name="name"
          value={nameInput.value}
          onChange={nameInput.handleChange}
          onBlur={nameInput.handleBlur}
          onClick={nameInput.handleTouch}
          className={`${
            nameInput.isTouched && !nameInput.isValid
              ? 'border-b-2 border-blue-500'
              : nameInput.isValid
              ? 'border-b-2 border-red-500'
              : ''
          } ${DEFAULT_INPUT_STYLE}`}
        />
        {(nameInput.isEmpty || nameInput.isValid) && (
          <ValidationMessage text="이름을 정확히 입력하세요." />
        )}
        <AuthInput
          type="tel"
          placeholder="휴대폰 번호"
          name="phone"
          value={phoneInput.value}
          onChange={phoneInput.handleChange}
          onBlur={phoneInput.handleBlur}
          onClick={phoneInput.handleTouch}
          className={`${
            phoneInput.isTouched && !phoneInput.isValid
              ? 'border-b-2 border-blue-500'
              : phoneInput.isValid
              ? 'border-b-2 border-red-500'
              : ''
          } ${DEFAULT_INPUT_STYLE}`}
        />
        {(phoneInput.isEmpty || phoneInput.isValid) && (
          <ValidationMessage text="휴대폰 번호를 정확하게 입력하세요. ([예시] 01012345678)" />
        )}
        <hr className="my-10" />
        <AuthButton
          type="button"
          text="로그인하러 가기"
          className="w-full p-10 my-4 border border-solid border-gray-400 rounded-sm bg-white"
          onClick={() => navigate('/login')}
        />
        <AuthButton text="동의하고 가입하기" />
      </form>
    </section>
  )
}

export default Register
