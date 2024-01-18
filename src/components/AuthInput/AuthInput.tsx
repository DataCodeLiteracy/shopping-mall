type AuthInputType = {
  type: string
  placeholder: string
  name?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  onClick?: React.MouseEventHandler<HTMLInputElement>
  className?: string
}

export const DEFAULT_INPUT_STYLE = 'w-full h-full pl-10 text-sm outline-none'

const AuthInput = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  onClick,
  className
}: AuthInputType) => {
  return (
    <div className="h-40 mb-10 border-1 border-solid border-gray-200 rounded-sm">
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onClick={onClick}
      />
    </div>
  )
}

export default AuthInput
