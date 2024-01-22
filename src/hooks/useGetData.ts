import { useEffect, useState } from 'react'
import { ProductItemProps } from '../components/home/ProductItem/ProductItem'

const useGetData = () => {
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

  return { data }
}

export default useGetData
