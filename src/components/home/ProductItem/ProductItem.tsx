export interface ProductItemProps {
  productId: number
  name: string
  price: number
  imageURL: string
}

interface ProductProps {
  item: ProductItemProps
}

const ProductItem = ({ item }: ProductProps) => {
  return (
    <li>
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
