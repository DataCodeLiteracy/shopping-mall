import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile
} from 'firebase/auth'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthButton from '../../components/AuthButton/AuthButton'
import AuthInput from '../../components/AuthInput/AuthInput'
import ValidationMessage from '../../components/ValidationMessage/ValidationMessage'
import ValidationMessages from '../../components/ValidationMessage/ValidationMessages'
import { isEmailCheck } from '../../utils/isValidationCheck'
import { isNameCheck } from '../../utils/isValidationCheck'
import { isPasswordCheckValid } from '../../utils/isValidationCheck'
import { isPasswordValid } from '../../utils/isValidationCheck'
import { isPhoneCheck } from '../../utils/isValidationCheck'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [phone, setPhone] = useState('')
  const [emailIsValid, setEmailIsValid] = useState(false)
  const [passwordIsValid, setPasswordIsValid] = useState(false)
  const [passwordCheckIsValid, setPasswordCheckIsValid] = useState(false)
  const [nameIsValid, setNameIsValid] = useState(false)
  const [phoneIsValid, setPhoneIsValid] = useState(false)
  const [isEmailEmpty, setIsEmailEmpty] = useState(false)
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false)
  const [isPasswordCheckEmpty, setIsPasswordCheckEmpty] = useState(false)
  const [isNameEmpty, setIsNameEmpty] = useState(false)
  const [isPhoneEmpty, setIsPhoneEmpty] = useState(false)
  const [isPasswordTouched, setIsPasswordTouched] = useState(false)
  const [isPasswordCheckTouched, setIsPasswordCheckTouched] = useState(false)

  const navigate = useNavigate()

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setEmail(value)
    setIsEmailEmpty(false)
  }

  const handleBlurEmail = () => {
    if (email.trim() === '') {
      setIsEmailEmpty(true)
    }

    if (email.length === 0 || isEmailCheck(email)) {
      setEmailIsValid(false)
    } else {
      setEmailIsValid(true)
    }
  }

  const handleBlurPassword = () => {
    if (password.trim() === '') {
      setIsPasswordEmpty(true)
    } else {
      setIsPasswordEmpty(false)
    }

    if (isPasswordValid(password, email)) {
      setPasswordIsValid(false)
      setIsPasswordEmpty(false)
    } else {
      setPasswordIsValid(true)
    }
  }

  const handlePasswordTouch = () => {
    setIsPasswordTouched(true)
  }

  const handleBlurPasswordCheck = () => {
    if (passwordCheck.trim() === '') {
      setIsPasswordCheckEmpty(true)
    } else {
      setIsPasswordCheckEmpty(false)
    }
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handlePasswordCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setPasswordCheck(value)
    setIsPasswordCheckEmpty(false)

    if (isPasswordCheckValid(password, value)) {
      setPasswordCheckIsValid(false)
    } else {
      setPasswordCheckIsValid(true)
    }
  }

  const handlePasswordCheckClick = () => {
    if (passwordCheck.trim() === '') {
      setIsPasswordCheckEmpty(true)
      setIsPasswordCheckTouched(true)
    }
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    setIsNameEmpty(false)
  }

  const handleNameBlur = () => {
    if (name.trim() === '') {
      setIsNameEmpty(true)
    }

    if (isNameCheck(name)) {
      setNameIsValid(false)
    } else {
      setNameIsValid(true)
    }
  }

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
    setIsPhoneEmpty(false)
  }

  const handlePhoneBlur = () => {
    if (phone.trim() === '') {
      setIsPhoneEmpty(true)
    }

    if (isPhoneCheck(phone)) {
      setPhoneIsValid(false)
    } else {
      setPhoneIsValid(true)
    }
  }

  const auth = getAuth()

  const handleSubmitRegister = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: '/images/user.png'
        })
      }
      navigate('/login')
    } catch (error) {}
  }

  return (
    <section className="flex flex-col justify-center w-1/2 max-w-md min-w-96 h-full m-auto">
      <p className="mb-4 font-bold text-sm">회원정보를 입력해주세요</p>
      <form onSubmit={handleSubmitRegister}>
        <AuthInput
          type="email"
          placeholder="아이디(이메일)"
          name="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleBlurEmail}
        />
        {email === '' && isEmailEmpty && (
          <ValidationMessage text="이메일을 입력하세요" />
        )}
        {emailIsValid && !isEmailEmpty && (
          <ValidationMessage text="이메일을 올바르게 입력해주세요." />
        )}
        <AuthInput
          type="password"
          placeholder="비밀번호"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          onClick={handlePasswordTouch}
          onBlur={handleBlurPassword}
        />
        {((isPasswordEmpty && isPasswordTouched) || passwordIsValid) && (
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
          value={passwordCheck}
          onChange={handlePasswordCheckChange}
          onBlur={handleBlurPasswordCheck}
          onClick={handlePasswordCheckClick}
        />
        {!isPasswordCheckEmpty && passwordCheckIsValid && (
          <ValidationMessage text="X 새 비밀번호가 일치하지 않습니다." />
        )}
        {isPasswordCheckEmpty && isPasswordCheckTouched && (
          <ValidationMessage text="X 확인을 위해 새 비밀번호를 다시 입력해주세요." />
        )}
        <AuthInput
          type="text"
          placeholder="이름"
          name="name"
          value={name}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
        />
        {(isNameEmpty || nameIsValid) && (
          <ValidationMessage text="이름을 정확히 입력하세요." />
        )}
        <AuthInput
          type="tel"
          placeholder="휴대폰 번호"
          name="phone"
          value={phone}
          onChange={handlePhoneChange}
          onBlur={handlePhoneBlur}
        />
        {(isPhoneEmpty || phoneIsValid) && (
          <ValidationMessage text="휴대폰 번호를 정확하게 입력하세요." />
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
