import { ChangeEvent, useState } from 'react'

interface InputProps {
  initialValue: string
  validator: (val1: string, val2?: string) => boolean
  type: string
  additionValue?: string
}

const useInput = ({
  initialValue,
  validator,
  type,
  additionValue
}: InputProps) => {
  const [value, setValue] = useState(initialValue)
  const [isValid, setIsValid] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)
  const [isTouched, setIsTouched] = useState(false)

  const validateInput = (inputValue: string) => {
    setIsEmpty(inputValue.trim() === '')

    const validationCondition =
      type === 'email' ||
      type === 'name' ||
      type === 'phone' ||
      type === 'password'

    setIsValid(
      validationCondition
        ? !validator(inputValue)
        : !validator(inputValue, additionValue)
    )
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target
    setIsTouched(false)
    validateInput(value)

    if (type === 'passwordCheck') {
      if (!isValid) setIsTouched(false)
    }
  }

  const handleTouch = () => {
    setIsTouched(true)
  }

  return {
    value,
    handleChange,
    handleBlur,
    handleTouch,
    isValid,
    isEmpty,
    isTouched
  }
}

export default useInput
