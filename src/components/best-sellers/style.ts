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
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    margin-bottom: 2rem;
  }
`