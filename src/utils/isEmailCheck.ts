const isEmailCheck = (email: string) => {
  if (/^.+@.+\..+$/.test(email)) {
    return true
  }
  return false
}

export default isEmailCheck
