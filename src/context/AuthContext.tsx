import { createContext, useEffect, useState } from 'react'
import { ExtendedUser, onUserStateChanged } from '../firebase'

interface ContextProps {
  children: React.ReactNode
}

export const AuthContext = createContext<ExtendedUser | null>(null)

export const UserContext = ({ children }: ContextProps) => {
  const [userInfo, setUserInfo] = useState<ExtendedUser | null>(null)

  useEffect(() => {
    onUserStateChanged(setUserInfo)
  }, [])

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  )
}
