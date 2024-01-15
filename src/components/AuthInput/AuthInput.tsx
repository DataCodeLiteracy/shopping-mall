type AuthInputType = {
  type: string
  placeholder: string
  name?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const AuthInput = ({
  type,
  placeholder,
  name,
  value,
  onChange
}: AuthInputType) => {
  return (
    <div className="h-40 mb-10 border-2 border-solid border-gray-200 rounded-sm">
      <input
        className="w-full h-full pl-10 text-sm outline-none"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default AuthInput
