import AuthButton from '../../components/AuthButton/AuthButton'
import AuthInput from '../../components/AuthInput/AuthInput'

const LogIn = () => {
  return (
    <section className="flex flex-col justify-center w-1/2 h-full max-w-md min-w-96 m-auto">
      <form>
        <AuthInput type="email" placeholder="이메일" />
        <AuthInput type="password" placeholder="비밀번호" />
        <AuthButton text="로그인" />
        <hr className="mt-4" />
        <AuthButton
          type="button"
          className="w-full p-10 mt-4 border border-solid border-gray-400 rounded-sm bg-white"
          text="회원가입"
        />
      </form>
    </section>
  )
}

export default LogIn
