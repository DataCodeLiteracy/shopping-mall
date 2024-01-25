import { createContext, useContext, useEffect, useState } from 'react'
import {
  ExtendedUser,
  logOutUser,
  loginUser,
  onUserStateChanged
} from '../firebase'

interface AuthContextType {
  userInfo: ExtendedUser | null
  isLoading: boolean
  loginUser: typeof loginUser
  logOutUser: typeof logOutUser
}

interface ContextProps {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthContextProvider = ({ children }: ContextProps) => {
  const [userInfo, setUserInfo] = useState<ExtendedUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    onUserStateChanged((user) => {
      setUserInfo(user)
      setIsLoading(false)
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{ userInfo, isLoading, loginUser, logOutUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
