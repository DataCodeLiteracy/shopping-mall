import { useLocation, useNavigate } from 'react-router-dom'
import { ProductType } from '../../components/home/ProductList/ProductList'

const Product = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { image, title, description, options, price } = location.state
    .item as ProductType

  const handleClick = () => {
    navigate('/cart', { state: location.state.item })
  }

  return (
    <section className="flex mt-30">
      <div className="w-1/2 mr-30">
        <img src={image} alt="상품 이미지" />
      </div>
      <div className="mt-20 w-1/2">
        <div>
          <div className="mb-20">
            <h1 className="text-3xl mb-10">{title}</h1>
            <h2 className="text-2xl mb-20">{price?.toLocaleString()}</h2>
            <p>{description}</p>
          </div>
          <hr className="border-2" />
          <p></p>
          <div className="flex items-center after my-20">
            <label htmlFor="options">
              <span className="mr-20">옵션</span>
              <select
                className="outline-none cursor-pointer border-2 border-gray-300"
                name="options"
                id="options"
              >
                {options.map((option) => (
                  <option>{option}</option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="w-4/5 h-30 bg-red-300 rounded-md"
            onClick={handleClick}
          >
            장바구니에 추가
          </button>
        </div>
      </div>
    </section>
  )
}

export default Product
