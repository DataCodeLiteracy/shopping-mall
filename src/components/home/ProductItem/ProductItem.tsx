import { useNavigate } from 'react-router-dom'

export interface ProductItemProps {
  productId: string | undefined
  name: string
  price: number
  imageURL: string
}

interface ProductProps {
  item: ProductItemProps
}

const ProductItem = ({ item }: ProductProps) => {
  const navigate = useNavigate()

  const moveToTheProductPage = () => {
    navigate(`/product/${item.productId}`)
  }

  return (
    <li onClick={moveToTheProductPage}>
      <div>
        <img src={item.imageURL} alt="" />
      </div>
      <div className="flex justify-between p-4 mt-8">
        <span>{item.name}</span>
        <span>{item.price}</span>
      </div>
    </li>
  )
}

export default ProductItem
