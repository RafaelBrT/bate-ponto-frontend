import styled from 'styled-components'

export const FooterComponentWrapper = styled.div`
  background-color: ${props => props.theme.colors.gray};
`

export const FooterTop = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 0rem;
  gap: 1.2rem;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 22px;
    font-weight: bold;
    &.secondary {
      color: ${props => props.theme.colors.secondary};
    }
  }
  .description {
    font-size: 16px;
    &.ul {
      list-style-type: none;
      max-height: 80px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }
  }
  .div-left, .div-center, .div-right {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    width: 40%;
  }

  @media (min-width: ${props => props.theme.media.md}) {
    flex-direction: row;
    align-items: start;
    .div-left, .div-center, .div-right {
      width: inherit;
    }
  }
`

export const FooterMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  padding-bottom: 1rem;
  font-size: 2rem;
  .icon {
    &__animation {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__whatsapp {
      color: #49C355;
    }
    &__facebook {
      color: #1773EA;
    }
    &__instagram {
      color: #D83870;
    }
  }
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