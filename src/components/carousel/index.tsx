'use client'
import React from 'react'
import ImageGallery from 'react-image-gallery'

import { CarouselComponentWrapper } from './styles'

import 'react-image-gallery/styles/scss/image-gallery.scss'


const CarouselComponent = () => {
  const images = [
    {
      original: '/images/banner1.jpg',
    },
    {
      original: '/images/banner1.jpg',
    },
    {
      original: '/images/banner1.jpg',
    },
  ]
  return (
    <CarouselComponentWrapper>
      <ImageGallery
        items={images}
        showThumbnails={false}
        showBullets
        autoPlay
      />
    </CarouselComponentWrapper>
  )
}

export default CarouselComponent