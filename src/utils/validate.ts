export function isEmail(email: string) {
  const emailReg
    = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return emailReg.test(email)
}

export function isPhone(phone: string) {
  const phoneReg = /^1[3456789]\d{9}$/
  return phoneReg.test(phone)
}
