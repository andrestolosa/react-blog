import React from 'react'

export default function Image({ imageSrc }) {
  return (
    <img src={imageSrc} alt="Imagen del articulo" style={{width: "500px", height: "250px", objectFit: "cover"}} />
  )
}
