import { useEffect } from 'react'
import useChangePath from '../../utils/useChangePath'

const Cart = () => {
  const { changePath: checkCartPath } = useChangePath({
    path: '/cart'
  })

  useEffect(() => {
    checkCartPath()
  }, [])

  return <div>장바구니</div>
}

export default Cart
