import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { addNewProduct } from '../../firebase'
import uploadImage from '../../utils/uploadImage'

export interface ProductInfo {
  name: string
  price: string
  gender: string
  description: string
  options: string
}

const NewProduct = () => {
  const [product, setProduct] = useState<ProductInfo>({
    name: '',
    price: '',
    gender: '',
    description: '',
    options: ''
  })
  const [file, setFile] = useState<File>()
  const [isUploading, setIsUploading] = useState(false)
  const [success, setSuccess] = useState<string | null>()
  const fileRef = useRef<HTMLInputElement>(null)

  const handleProductChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target
    setProduct((product) => ({ ...product, [name]: value }))

    if (files) {
      if (name === 'image') setFile(files[0])
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsUploading(true)
    const imageURL = await uploadImage(file as File)
    await addNewProduct(product, imageURL)
    setSuccess('성공적으로 제품이 추가되었습니다.')
    setTimeout(() => {
      setSuccess(null)
    }, 4000)
    setIsUploading(false)
    setProduct({
      name: '',
      price: '',
      gender: '',
      description: '',
      options: ''
    })
    setFile(undefined)
    if (fileRef.current) {
      fileRef.current.value = ''
    }
  }

  return (
    <section className="w-full text-center">
      <h2 className="text-2xl my-10">새로운 제품 등록</h2>
      {success && <p>{success}</p>}
      {file && (
        <img
          className="w-400 mx-auto mb-10"
          src={URL.createObjectURL(file)}
          alt="상품 등록 이미지"
        />
      )}
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="image"
          ref={fileRef}
          onChange={handleProductChange}
        />
        <input
          type="text"
          name="name"
          placeholder="상품명을 입력해주세요."
          value={product.name}
          onChange={handleProductChange}
        />
        <input
          type="number"
          name="price"
          placeholder="가격을 입력해주세요."
          min="0"
          step="100"
          value={product.price}
          onChange={handleProductChange}
        />
        <input
          type="text"
          name="gender"
          placeholder="성별을 입력해주세요."
          value={product.gender}
          onChange={handleProductChange}
        />
        <input
          type="text"
          name="description"
          placeholder="상품 설명을 입력해주세요."
          value={product.description}
          onChange={handleProductChange}
        />
        <input
          type="text"
          name="options"
          placeholder="옵션은 콤마(,)로 구분해주세요."
          value={product.options}
          onChange={handleProductChange}
        />
        <button className="h-40 rounded-sm bg-red-300" disabled={isUploading}>
          {isUploading ? '업로드 중' : '제품 등록하기'}
        </button>
      </form>
    </section>
  )
}

export default NewProduct
