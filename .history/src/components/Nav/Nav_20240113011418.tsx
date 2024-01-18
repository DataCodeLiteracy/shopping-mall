import { CiShop } from 'react-icons/ci'
import { FaCartArrowDown } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'

const Nav = () => {
  return (
    <section className="flex justify-between p-15 h-50">
      <div className="flex">
        <CiShop />
        <span className="text-lg">Shoppy</span>
      </div>
      <div className="flex">
        <FaCartArrowDown />
        <FaPencilAlt />
        <button>Login</button>
      </div>
    </section>
  )
}

export default Nav
