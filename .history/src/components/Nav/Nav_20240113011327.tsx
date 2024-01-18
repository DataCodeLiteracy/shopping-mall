import { CiShop } from 'react-icons/ci'
import { FaCartArrowDown } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'

const Nav = () => {
  return (
    <section className="flex justify-between p-30">
      <div className="flex">
        <CiShop />
        <span>Shoppy</span>
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
