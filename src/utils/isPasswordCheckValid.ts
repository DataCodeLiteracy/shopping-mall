const isPasswordCheckValid = (password: string, passwordCheck: string) => {
  if (password === passwordCheck) {
    return true
  }
  return false
}

export default isPasswordCheckValid
