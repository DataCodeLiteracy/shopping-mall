const NewProduct = () => {
  return (
    <section className="w-full text-center">
      <h2 className="text-2xl my-10">새로운 제품 등록</h2>
      <img className="w-400 mx-auto mb-10" src="" alt="상품 등록 이미지" />
      <form className="flex flex-col">
        <input type="file" accept="image/*" name="image" />
        <input type="text" name="name" placeholder="상품명을 입력해주세요." />
        <input type="text" name="price" placeholder="가격을 입력해주세요." />
        <input type="text" name="gender" placeholder="성별을 입력해주세요." />
        <input
          type="text"
          name="description"
          placeholder="상품 설명을 입력해주세요."
        />
        <input
          type="text"
          name="options"
          placeholder="옵션은 콤마(,)로 구분해주세요."
        />
        <button className="h-40 rounded-sm bg-red-300">제품 등록하기</button>
      </form>
    </section>
  )
}

export default NewProduct
