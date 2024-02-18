import styled from 'styled-components'

export const CarouselComponentWrapper = styled.div`
  .image-gallery {
    width: 100%;
    height: auto;
  }

  .image-gallery-slide img {
    width: 100%;
    height: 50vh;
    max-height: 80vh;
    object-fit: cover;
    overflow: hidden;
    object-position: center center;
  }

  .image-gallery-bullet {
    &.active {
      background: ${props => props.theme.colors.secondary};
    }
    &:hover {
      background: ${props => props.theme.colors.secondary} !important;
      border: 1px solid ${props => props.theme.colors.white};
    }
  }

  .fullscreen .image-gallery-slide img {
    max-height: 100vh;
  }
  .image-gallery-icon:hover {
    color: ${props => props.theme.colors.secondary};
  }
`