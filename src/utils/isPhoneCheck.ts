const isPhoneCheck = (phone: string) => {
  if (phone.startsWith('010') && phone.length === 11) {
    return true
  }
  return false
}

export default isPhoneCheck
