import { useQuery } from 'react-query'
import ProductItem from '../ProductItem/ProductItem'
import { getAllProducts } from '../../../firebase'
import { FirebaseError } from '@firebase/app'

export interface ProductType {
  category: string
  description: string
  id: string
  image: string
  options: string[]
  price: string
  title: string
}

const ProductList = () => {
  const {
    data: products,
    isLoading,
    error
  } = useQuery<ProductType[], FirebaseError, ProductType[]>(
    'products',
    getAllProducts
  )

  if (isLoading) return <div>isLoading...</div>

  return (
    <section className="px-10">
      {error && <p>{error?.message}</p>}
      <ul className="grid grid-cols-4 gap-10 mt-30">
        {products?.map((product) => (
          <ProductItem key={product.id} item={product} />
        ))}
      </ul>
    </section>
  )
}

export default ProductList
