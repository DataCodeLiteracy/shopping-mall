import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'

interface ProtectedRouteProps {
  children: React.ReactNode
  requireAdmin?: boolean
}

const ProtectedRoute = ({ children, requireAdmin }: ProtectedRouteProps) => {
  const { userInfo, isLoading } = useAuthContext() || {}

  if (isLoading) {
    return <div>로딩 중...</div>
  }

  if (!userInfo || (requireAdmin && !userInfo.isAdmin)) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute
