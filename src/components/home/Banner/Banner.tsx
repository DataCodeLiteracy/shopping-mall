const Banner = () => {
  return (
    <section className="relative">
      <div>
        <img
          className="w-full h-300"
          src="/images/main-banner.jpg"
          alt="메인 배너 이미지"
        />
      </div>
      <div className="absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 text-white">
        <h1 className="text-4xl">Shop With Us</h1>
        <p>Best Products, High Quality</p>
      </div>
    </section>
  )
}

export default Banner
