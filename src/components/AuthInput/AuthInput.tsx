type AuthInputType = {
  type: string
  placeholder: string
  className?: string
}

const AuthInput = ({ type, placeholder, className }: AuthInputType) => {
  return (
    <div className="h-40 mb-10 border-2 border-solid border-gray-200 rounded-sm">
      <input
        className="w-full h-full pl-10 text-sm outline-none"
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default AuthInput
