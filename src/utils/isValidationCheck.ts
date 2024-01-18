export const isPhoneCheck = (phone: string) => {
  if (phone.startsWith('010') && phone.length === 11) {
    return true
  }
  return false
}

export const isEmailCheck = (email: string) => {
  if (/^.+@.+\..+$/.test(email)) {
    return true
  }
  return false
}

export const isNameCheck = (name: string) => {
  const regex = /^[가-힣a-zA-Z]+$/
  if (name.length > 0 && regex.test(name)) {
    return true
  }
  return false
}

export const isPasswordCheckValid = (
  password: string,
  passwordCheck: string
) => {
  if (password === passwordCheck) {
    return true
  }
  return false
}

const isSequentialOrSame = (password: string) => {
  for (let i = 0; i < password.length - 2; i++) {
    let current = password.charCodeAt(i)
    let next = password.charCodeAt(i + 1)
    let next2 = password.charCodeAt(i + 2)

    // 동일한 문자/숫자가 3개 연속되는 경우
    if (current === next && next === next2) {
      return true
    }

    // 연속되는 숫자인 경우 (예: 123, 456)
    if (current + 1 === next && next + 1 === next2) {
      return true
    }

    // 연속되는 알파벳인 경우 (예: abc, def)
    if (current + 1 === next && next + 1 === next2) {
      return true
    }
  }
  return false
}

export const isPasswordValid = (password: string, email: string) => {
  if (password.length < 8 || password.length > 20) {
    return false
  }

  // 기본 조건 확인
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasDigit = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*()\-_=+[\]{};:'",<.>/?\\|]/.test(password)

  // 영문, 숫자, 특수문자 중 2가지 이상 조합 확인
  const conditionsMet =
    [hasUpperCase, hasLowerCase, hasDigit, hasSpecialChar].filter(Boolean)
      .length >= 2

  // 연속되거나 동일한 문자/숫자 확인
  const sequentialOrSame = isSequentialOrSame(password)

  // 이메일 포함 여부 확인
  const containsEmail = password.includes(email)

  // 모든 조건을 만족하는지 확인
  return conditionsMet && !sequentialOrSame && !containsEmail
}
