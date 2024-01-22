import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { CiShop } from 'react-icons/ci'
import { FaCartArrowDown, FaPencilAlt, FaUser } from 'react-icons/fa'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

interface UserInfo {
  uid: string
  displayName: string | null
  photoURL: string | null
}

const Nav = () => {
  const navigate = useNavigate()
  const accessToken = localStorage.getItem('access_token')

  const fetchAuthUser = (): Promise<UserInfo | null> => {
    return new Promise((resolve, reject) => {
      const auth = getAuth()
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          unsubscribe()
          if (user) {
            const { uid, displayName, photoURL } = user
            resolve({ uid, displayName, photoURL })
          } else {
            resolve(null)
          }
        },
        reject
      )
    })
  }

  const { data: userInfo, isLoading } = useQuery<UserInfo | null>(
    'authUser',
    fetchAuthUser
  )

  const handleLogOut = () => {
    localStorage.removeItem('access_token')
    navigate('/login')
  }

  if (isLoading) {
    return <div>Loading...</div>
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
