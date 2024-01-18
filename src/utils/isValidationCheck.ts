export const isPhoneCheck = (val1: string) => {
  if (val1.startsWith('010') && val1.length === 11) {
    return true
  }
  return false
}

export const isEmailCheck = (val1: string) => {
  if (/^.+@.+\..+$/.test(val1)) {
    return true
  }
  return false
}

export const isNameCheck = (val1: string) => {
  const regex = /^[가-힣a-zA-Z]+$/
  if (val1.length > 1 && regex.test(val1)) {
    return true
  }
  return false
}

export const isPasswordCheckValid = (val1: string, val2?: string) => {
  if (val2) {
    if (val1 === val2) {
      return true
    }
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

export const isPasswordValid = (val1: string, val2?: string) => {
  if (val1.length < 8 || val1.length > 20) {
    return false
  }

  // 기본 조건 확인
  const hasUpperCase = /[A-Z]/.test(val1)
  const hasLowerCase = /[a-z]/.test(val1)
  const hasDigit = /\d/.test(val1)
  const hasSpecialChar = /[!@#$%^&*()\-_=+[\]{};:'",<.>/?\\|]/.test(val1)

  // 영문, 숫자, 특수문자 중 2가지 이상 조합 확인
  const conditionsMet =
    [hasUpperCase, hasLowerCase, hasDigit, hasSpecialChar].filter(Boolean)
      .length >= 2

  // 연속되거나 동일한 문자/숫자 확인
  const sequentialOrSame = isSequentialOrSame(val1)

  // 이메일 포함 여부 확인
  const containsEmail = val2 && val1.includes(val2)

  // 모든 조건을 만족하는지 확인
  return conditionsMet && !sequentialOrSame && !containsEmail
}
