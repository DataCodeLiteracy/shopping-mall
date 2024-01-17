const isNameCheck = (name: string) => {
  const regex = /^[가-힣a-zA-Z]+$/
  if (name.length > 0 && regex.test(name)) {
    return true
  }
  return false
}

export default isNameCheck
