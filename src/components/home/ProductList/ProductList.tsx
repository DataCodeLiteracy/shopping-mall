import ProductItem from '../ProductItem/ProductItem'
import useGetData from '../../../hooks/useGetData'

const ProductList = () => {
  const { data } = useGetData()

  return (
    <ul className="grid grid-cols-4 gap-10 mt-30">
      {data.map((product) => (
        <ProductItem key={product.productId} item={product} />
      ))}
    </ul>
  )
}

export default ProductList
