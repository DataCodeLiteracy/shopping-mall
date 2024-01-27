import { useNavigate } from 'react-router-dom'
import { ProductType } from '../ProductList/ProductList'

interface ProductProps {
  item: ProductType
}

const ProductItem = ({ item }: ProductProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/product/${item.id}`, { state: { item } })
  }

  return (
    <li className="cursor-pointer" onClick={handleClick}>
      <div>
        <img src={item.image} alt="" />
      </div>
      <div className="flex justify-between p-4 mt-8">
        <span className="truncate">{item.title}</span>
        <span className="ml-4">{item.price.toLocaleString()}</span>
      </div>
      <div className="flex flex-start p-4">
        <span>{item.category}</span>
      </div>
    </li>
  )
}

export default ProductItem
