import BestsellersComponent from '@components/best-sellers'
import CarouselComponent from '@components/carousel'
import NavbarComponent from '@components/navbar'

export default function Home() {
  return (
    <main>
      <NavbarComponent />
      <CarouselComponent />
      <BestsellersComponent />
    </main>
  )
}
