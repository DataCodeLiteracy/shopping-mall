import { CiShop } from 'react-icons/ci'
import { FaCartArrowDown, FaPencilAlt } from 'react-icons/fa'
import useChangePath from '../../utils/useChangePath'

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

  return (
    <nav className="flex justify-between p-15 h-50 border-solid border-b border-gray-700">
      <div
        className="flex items-center cursor-pointer"
        onClick={changeRootPath}
      >
        <CiShop className="text-25" />
        <span className="ml-10 text-20">Shoppy</span>
      </div>
      <div className="flex items-center justify-evenly w-1/5">
        <FaCartArrowDown
          className="text-20 cursor-pointer"
          onClick={changeCartPath}
        />
        <FaPencilAlt className="text-20 cursor-pointer" />
        <button
          className="p-6 bg-red-400 text-20 text-white"
          onClick={changeLoginPath}
        >
          Login
        </button>
      </div>
    </nav>
  )
}

export default Nav
