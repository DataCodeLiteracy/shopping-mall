import { useEffect } from 'react'
import { CiShop } from 'react-icons/ci'
import { FaCartArrowDown } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Nav = ({ setPath }: any) => {
  const navigate = useNavigate()

  const goToTheLoginPage = () => {
    setPath('/login')
    navigate('/login')
  }

  return (
    <nav className="flex justify-between p-15 h-50 border-solid border-b border-gray-700">
      <div className="flex items-center">
        <CiShop className="text-25" />
        <span className="ml-10 text-20">Shoppy</span>
      </div>
      <div className="flex items-center justify-evenly w-1/5 ">
        <FaCartArrowDown className="text-20" />
        <FaPencilAlt className="text-20" />
        <button
          className="p-6 bg-red-400 text-20 text-white"
          onClick={goToTheLoginPage}
        >
          Login
        </button>
      </div>
    </nav>
  )
}

export default Nav
