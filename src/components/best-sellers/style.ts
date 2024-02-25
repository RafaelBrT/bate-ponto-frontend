import styled from 'styled-components'

export const BestSellersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    margin: 1rem 0rem;
  }
  .item-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    margin-bottom: 2rem;
  }

  @media (min-width: ${props => props.theme.media.md}) {
    .item-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: ${props => props.theme.media.lg}) {
    .item-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: ${props => props.theme.media.xl}) {
    .item-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`