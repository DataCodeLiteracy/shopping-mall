import { CiShop } from 'react-icons/ci'
import { FaCartArrowDown, FaPencilAlt, FaUser } from 'react-icons/fa'
import useLoginCheck from '../../hooks/useLoginCheck'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()
  const { userInfo } = useLoginCheck()
  const accessToken = localStorage.getItem('access_token')

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
      <div className="flex items-center justify-evenly w-1/3">
        <FaCartArrowDown
          className="text-20 cursor-pointer"
          onClick={() => navigate('/cart')}
        />
        <FaPencilAlt className="text-20 cursor-pointer" />
        <div className="flex items-center">
          <div className="flex items-center justify-center w-30 h-30 mr-6 border-1 border-solid border-black rounded-full">
            {userInfo.photoURL ? (
              <img src={userInfo.photoURL} alt="user-image" />
            ) : (
              <FaUser />
            )}
          </div>
          <span>{userInfo.displayName}</span>
        </div>
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
