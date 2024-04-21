import styled from 'styled-components'

export const ProductPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

export const Card = styled.div`
  width: 80%;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  -moz-box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  `
export const CardTop = styled.div`
  display: flex;
`

export const ItemsCarouselWrapper = styled.div`
  width: 50%;
`

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 1rem;
  gap: 1.5rem;
  margin-left: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  -moz-box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  .title {
    font-size: 22px;
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
  }
  .description {
    font-size: 16px;
  }
  button {
    padding: 1.5rem;
    border: none;
    outline: none;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
    border-radius: 5px;
    cursor: pointer;
  }
`