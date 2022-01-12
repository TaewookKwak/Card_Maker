import { useState } from 'react'

export default class UploadImage {
  async upload(e) {
    const img = e.target.files[0]
    const formData = new FormData()
    formData.append('file', img)
    formData.append('upload_preset', 'bivwbvvq')
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dkwge7cqi/image/upload',
      {
        method: 'POST',
        body: formData,
      },
    )
    return await res.json()
  }
}
