import { useParams } from 'react-router-dom'
import useGetData from '../../hooks/useGetData'

const Product = () => {
  const { id } = useParams()
  const { data } = useGetData()

  const filteredData = Object.assign(
    {},
    data.filter((item) => item.productId === id)
  )

  return (
    <section className="flex mt-30">
      <div className="w-1/2 mr-30">
        <img src={filteredData[0]?.imageURL} alt="상품 이미지" />
      </div>
      <div className="mt-20 w-1/2">
        <div>
          <div>
            <h1 className="text-3xl mb-10">{filteredData[0]?.name}</h1>
            <h2 className="text-2xl mb-20">
              {filteredData[0]?.price.toLocaleString()}
            </h2>
          </div>
          <hr className="border-2" />
          <p></p>
          <div className="my-20">
            <label htmlFor="options">
              <span>옵션</span>
              <select name="options" id="options">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </label>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="w-4/5 h-30 bg-red-300 rounded-md">장바구니에 추가</button>
        </div>
      </div>
    </section>
  )
}

export default Product
