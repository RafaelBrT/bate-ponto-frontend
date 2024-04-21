import BestsellersComponent from '@components/best-sellers'
import CarouselComponent from '@components/carousel'
import FooterComponent from '@components/footer-component'
import NavbarComponent from '@components/navbar'

export default function Home() {
  return (
    <main>
      <NavbarComponent />
      <CarouselComponent
        items={
          [
            {
              original: '/images/banner1.jpg',
              thumbnail: '/images/banner1.jpg'
            },
            {
              original: '/images/banner1.jpg',
              thumbnail: '/images/banner1.jpg'
            },
            {
              original: '/images/banner1.jpg',
              thumbnail: '/images/banner1.jpg'
            },
          ]
        }
        showBullets={true}
        thumbnailPosition='bottom'
        showThumbnails={false}
        autoplay={true}
        showPlayButton={true}
        showFullscreenButton={true}
        showNav={true}
      />
      <BestsellersComponent />
      <FooterComponent />
    </main>
  )
}
