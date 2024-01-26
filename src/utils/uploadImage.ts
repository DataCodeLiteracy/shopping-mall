const uploadImage = (file: File) => {
  const CLOUDINARY_URL =
    'https://api.cloudinary.com/v1_1/dzheemcl7/image/upload'

  const data = new FormData()

  data.append('file', file)
  data.append('upload_preset', 'lkydwmgu')

  return fetch(CLOUDINARY_URL, {
    method: 'POST',
    body: data
  })
    .then((res) => res.json())
    .then((data) => data.url)
}

export default uploadImage
