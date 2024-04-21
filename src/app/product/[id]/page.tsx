'use client'
import CarouselComponent from '@components/carousel'

import { Card, CardTop, ItemInfo, ItemsCarouselWrapper, ProductPageWrapper } from './style'

const ProductPage = () => {
  return (
    <ProductPageWrapper>
      <Card>
        <CardTop>
          <ItemsCarouselWrapper>
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
              showBullets={false}
              thumbnailPosition='left'
              showThumbnails={true}
              autoplay={false}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false}
            />
          </ItemsCarouselWrapper>
          <ItemInfo>
            <p className="title">
              Relógio Ponto Hexa
            </p>
            <p className="description">
              Relógio de ponto eletrônico homologado pelo MTE e certificado pelo Inmetro.
              O Hexa Advanced é um relógio de ponto eletrônico (REP) homologado pelo Ministério do Trabalho e Emprego certificado pelo Inmetro.
            </p>
            <button>
              {'Solicite Orçamento >>'}
            </button>
          </ItemInfo>
        </CardTop>
      </Card>
    </ProductPageWrapper>
  )
}

export default ProductPage