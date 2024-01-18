type ButtonProps = {
  type?: 'submit' | 'reset' | 'button' | undefined
  className?: string
  text: string
  onClick?: () => void
}

const AuthButton = ({
  type = 'submit',
  className = 'w-full p-10 mt-4 rounded-sm bg-blue-500 text-white',
  text,
  ...rest
}: ButtonProps) => {
  return (
    <button type={type} className={className} {...rest}>
      {text}
    </button>
  )
}

export default AuthButton
