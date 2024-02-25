import BestsellersComponent from '@components/best-sellers'
import CarouselComponent from '@components/carousel'
import FooterComponent from '@components/footer-component'
import NavbarComponent from '@components/navbar'

export default function Home() {
  return (
    <main>
      <NavbarComponent />
      <CarouselComponent />
      <BestsellersComponent />
      <FooterComponent />
    </main>
  )
}
