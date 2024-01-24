import { useEffect, useState } from 'react'
import { CiShop } from 'react-icons/ci'
import { FaCartArrowDown, FaPencilAlt, FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { onUserStateChanged } from '../../firebase'
import { User } from 'firebase/auth'

export interface UserInfo {
  uid: string
  displayName: string | null
  photoURL: string | null
}

const Nav = () => {
  const [userInfo, setUserInfo] = useState<User | null>(null)
  const navigate = useNavigate()
  const accessToken = localStorage.getItem('access_token')

  useEffect(() => {
    onUserStateChanged(setUserInfo)
  }, [])

  const handleLogOut = () => {
    localStorage.removeItem('access_token')
    navigate('/login')
  }

  return (
    <nav className="flex justify-between p-15 h-50 border-solid border-b border-gray-700">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate('/')}
      >
        <CiShop className="text-25" />
        <span className="ml-10 text-20">Shoppy</span>
      </div>
      <div
        className={`flex items-center justify-evenly ${
          accessToken ? 'w-1/3' : 'w-1/5'
        }`}
      >
        {accessToken && (
          <FaCartArrowDown
            className="text-20 cursor-pointer"
            onClick={() => navigate('/cart')}
          />
        )}
        {accessToken && <FaPencilAlt className="text-20 cursor-pointer" />}
        {accessToken && (
          <div className="flex items-center">
            <div className="flex items-center justify-center w-30 h-30 mr-6 border-1 border-solid border-black rounded-full">
              {userInfo && userInfo.photoURL ? (
                <img src={userInfo && userInfo.photoURL} alt="user-image" />
              ) : (
                <FaUser />
              )}
            </div>
            <span>{userInfo && userInfo.displayName}</span>
          </div>
        )}
        <button
          className="p-6 bg-red-400 text-15 text-white"
          onClick={accessToken ? handleLogOut : () => navigate('/login')}
        >
          {accessToken ? '로그아웃' : '로그인'}
        </button>
      </div>
    </nav>
  )
}

export default Nav
