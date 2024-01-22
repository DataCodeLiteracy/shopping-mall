import { useEffect, useState } from 'react'
import ProductItem, { ProductItemProps } from '../ProductItem/ProductItem'

const ProductList = () => {
  const [data, setData] = useState<ProductItemProps[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/data/product.json')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <ul className="grid grid-cols-4 gap-10 mt-30">
      {data.map((product) => (
        <ProductItem key={product.productId} item={product} />
      ))}
    </ul>
  )
}

export default ProductList
