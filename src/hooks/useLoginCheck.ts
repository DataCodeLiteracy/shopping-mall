import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'

interface UserInfo {
  uid: string | null
  displayName: string | null
  photoURL: string | null
}

const useLoginCheck = () => {
  const auth = getAuth()
  const [userInfo, setUserInfo] = useState<UserInfo>({
    uid: '',
    displayName: '',
    photoURL: ''
  })

  const loginCheck = async () => {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        const displayName = user.displayName
        const photoURL = user.photoURL

        setUserInfo({ uid, displayName, photoURL })
      }
    })
  }

  useEffect(() => {
    loginCheck()
  }, [])

  return {
    userInfo
  }
}

export default useLoginCheck
