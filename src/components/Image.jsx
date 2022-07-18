import React from 'react'
import Image from 'next/image'

const image = ({src, alt, height, width, ...otherProps}) => {
  return (
    <>
    <Image 
      src={src}
      alt={alt}
      height={height}
      width={width}
      {...otherProps}
    />
    </>
  )
}

export default image