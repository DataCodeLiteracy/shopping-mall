import { User } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import { onUserStateChanged } from '../firebase'

interface ContextProps {
  children: React.ReactNode
}

const AuthContext = createContext<User | null>(null)

export const UserContext = ({ children }: ContextProps) => {
  const [userInfo, setUserInfo] = useState<User | null>(null)

  useEffect(() => {
    onUserStateChanged(setUserInfo)
  }, [])

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  )
}
