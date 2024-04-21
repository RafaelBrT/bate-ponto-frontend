'use client'
import React from 'react'
import ImageGallery from 'react-image-gallery'

import { CarouselComponentProps } from './interfaces'
import { CarouselComponentWrapper } from './styles'

import 'react-image-gallery/styles/scss/image-gallery.scss'


const CarouselComponent = ({
  items,
  showBullets = true,
  thumbnailPosition = 'bottom',
  showThumbnails = true,
  autoplay = true,
  showPlayButton = true,
  showFullscreenButton = true,
  showNav = true
}: CarouselComponentProps) => {
  return (
    <CarouselComponentWrapper>
      <ImageGallery
        items={items}
        showBullets={showBullets}
        thumbnailPosition={thumbnailPosition}
        showThumbnails={showThumbnails}
        autoPlay={autoplay}
        showPlayButton={showPlayButton}
        showFullscreenButton={showFullscreenButton}
        showNav={showNav}
      />
    </CarouselComponentWrapper>
  )
}

export default CarouselComponent