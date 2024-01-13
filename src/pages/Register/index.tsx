import AuthButton from '../../components/AuthButton/AuthButton'
import AuthInput from '../../components/AuthInput/AuthInput'

const Register = () => {
  return (
    <section className="flex flex-col justify-center w-1/2 max-w-md min-w-96 h-full m-auto">
      <p className="mb-4 font-bold text-sm">회원정보를 입력해주세요</p>
      <form>
        <AuthInput type="email" placeholder="아이디(이메일)" />
        <AuthInput type="text" placeholder="비밀번호" />
        <AuthInput type="text" placeholder="비밀번호 확인" />
        <AuthInput type="text" placeholder="이름" />
        <AuthInput type="tel" placeholder="휴대폰 번호" />
      </form>
      <hr className="my-10" />
      <AuthButton text="동의하고 가입하기" />
    </section>
  )
}

export default Register
