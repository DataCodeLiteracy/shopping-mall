import { CiShop } from 'react-icons/ci'
import { FaCartArrowDown, FaPencilAlt, FaUser } from 'react-icons/fa'
import useChangePath from '../../hooks/useChangePath'
import useLoginCheck from '../../hooks/useLoginCheck'

const Nav = () => {
  const { changePath: changeLoginPath } = useChangePath({
    path: '/login'
  })
  const { changePath: changeRootPath } = useChangePath({
    path: '/'
  })
  const { changePath: changeCartPath } = useChangePath({
    path: '/cart'
  })
  const { userInfo } = useLoginCheck()
  const accessToken = localStorage.getItem('access_token')

  const handleLogOut = () => {
    localStorage.removeItem('access_token')
    changeLoginPath()
  }

  return (
    <nav className="flex justify-between p-15 h-50 border-solid border-b border-gray-700">
      <div
        className="flex items-center cursor-pointer"
        onClick={changeRootPath}
      >
        <CiShop className="text-25" />
        <span className="ml-10 text-20">Shoppy</span>
      </div>
      <div className="flex items-center justify-evenly w-1/3">
        <FaCartArrowDown
          className="text-20 cursor-pointer"
          onClick={changeCartPath}
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
          onClick={accessToken ? handleLogOut : changeLoginPath}
        >
          {accessToken ? '로그아웃' : '로그인'}
        </button>
      </div>
    </nav>
  )
}

export default Nav
