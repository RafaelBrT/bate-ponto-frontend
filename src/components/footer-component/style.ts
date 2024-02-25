import styled from 'styled-components'

export const FooterComponentWrapper = styled.div`
  background-color: ${props => props.theme.colors.gray};
`

export const FooterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0rem;
  flex-direction: column;
  .title {
    font-size: 22px;
    font-weight: bold;
    &.secondary {
      color: ${props => props.theme.colors.secondary};
    }
  }
  .description {
    font-size: 16px;
  }
  .div-left, .div-center, .div-right {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  @media (min-width: ${props => props.theme.media.md}) {
    flex-direction: row;
  }
`

export const FooterMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  padding-bottom: 1rem;
`

export const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  gap: 0.5rem;
  padding: 1rem 0rem;
  text-align: center;
`