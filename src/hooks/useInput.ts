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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setValue(value)

    if (type === 'email' || type === 'name' || type === 'phone') {
      setIsEmpty(false)
    }

    if (type === 'passwordCheck') {
      setIsEmpty(false)

      if (validator(value, additionValue)) {
        setIsValid(false)
      } else {
        setIsValid(true)
      }
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target

    setIsTouched(false)

    if (value.trim() === '') {
      setIsEmpty(true)
    }

    if (type === 'email' || type === 'name' || type === 'phone') {
      if (validator(value)) {
        setIsValid(false)
      } else {
        setIsValid(true)
      }
    }

    if (type === 'password') {
      if (value.trim() !== '') {
        setIsEmpty(false)
      }

      if (validator(value, additionValue)) {
        setIsValid(false)
        setIsEmpty(false)
      } else {
        setIsValid(true)
      }
    }

    if (type === 'passwordCheck') {
      if (value.trim() !== '') {
        setIsEmpty(false)
      } else {
        setIsTouched(true)
      }
    }
  }

  const handleTouch = (e: React.MouseEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setIsTouched(true)

    if (type === 'passwordCheck') {
      if (value.trim() === '') {
        setIsTouched(true)
      }
    }
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
