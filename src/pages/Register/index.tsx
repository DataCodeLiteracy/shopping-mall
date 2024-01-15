import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile
} from 'firebase/auth'
import { ChangeEvent, FormEvent, useState } from 'react'
import AuthButton from '../../components/AuthButton/AuthButton'
import AuthInput from '../../components/AuthInput/AuthInput'
import useChangePath from '../../utils/useChangePath'

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
    phone: ''
  })
  const { changePath: changeLoginPath } = useChangePath({
    path: '/login'
  })

  const handleUserInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserInfo({ ...userInfo, [name]: value })
  }

  const auth = getAuth()

  const handleSubmitRegister = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      )
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: userInfo.name
        })
      }
      changeLoginPath()
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
          value={userInfo.email}
          onChange={handleUserInfoChange}
        />
        <AuthInput
          type="password"
          placeholder="비밀번호"
          name="password"
          value={userInfo.password}
          onChange={handleUserInfoChange}
        />
        <AuthInput
          type="password"
          placeholder="비밀번호 확인"
          name="passwordCheck"
          value={userInfo.passwordCheck}
          onChange={handleUserInfoChange}
        />
        <AuthInput
          type="text"
          placeholder="이름"
          name="name"
          value={userInfo.name}
          onChange={handleUserInfoChange}
        />
        <AuthInput
          type="tel"
          placeholder="휴대폰 번호"
          name="phone"
          value={userInfo.phone}
          onChange={handleUserInfoChange}
        />
        <hr className="my-10" />
        <AuthButton
          type="button"
          text="로그인하러 가기"
          className="w-full p-10 my-4 border border-solid border-gray-400 rounded-sm bg-white"
          onClick={changeLoginPath}
        />
        <AuthButton text="동의하고 가입하기" />
      </form>
    </section>
  )
}

export default Register
