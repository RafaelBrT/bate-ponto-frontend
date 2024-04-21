interface CarouselItems {
  original: string;
  thumbnail: string;
}

export interface CarouselComponentProps {
  items: CarouselItems[]
  showThumbnails?: boolean
  thumbnailPosition?: 'top' | 'right' | 'bottom' | 'left'
  showBullets?: boolean
  autoplay?: boolean
  showPlayButton?: boolean
  showFullscreenButton?: boolean
  showNav?: boolean
}