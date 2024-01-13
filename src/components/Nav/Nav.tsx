import { CiShop } from 'react-icons/ci'
import { FaCartArrowDown, FaPencilAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { urlState } from '../../recoil/url/atom'
import { useSetRecoilState } from 'recoil'
import changePath from '../../utils/changePath'

const Nav = () => {
  const navigate = useNavigate()
  const setUrlPath = useSetRecoilState(urlState)

  const goToThePage = (path: string) => {
    changePath({ setUrlPath, navigate, path })
  }

  return (
    <nav className="flex justify-between p-15 h-50 border-solid border-b border-gray-700">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => goToThePage('/')}
      >
        <CiShop className="text-25" />
        <span className="ml-10 text-20">Shoppy</span>
      </div>
      <div className="flex items-center justify-evenly w-1/5">
        <FaCartArrowDown
          className="text-20 cursor-pointer"
          onClick={() => goToThePage('/cart')}
        />
        <FaPencilAlt className="text-20 cursor-pointer" />
        <button
          className="p-6 bg-red-400 text-20 text-white"
          onClick={() => goToThePage('/login')}
        >
          Login
        </button>
      </div>
    </nav>
  )
}

export default Nav
