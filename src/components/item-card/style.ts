import styled from 'styled-components'

export const ItemCardWrapper = styled.div`
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  -moz-box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.white};
  cursor: pointer;
  .header {
    width: 100%;
    height: 165px;
    background-image: url('/images/relogio-hexa-advanced.jpg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .content {
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    &__title {
      p {
        font-size: 22px;
        color: ${props => props.theme.colors.primary};
      }
    }
    &__description {
      p {
        font-size: 16px;
        color: ${props => props.theme.colors.black};
        text-align: center;
      }
    }
  }
  .action {
    width: 100%;
    height: 80px;
    button {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      background-color: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.white};
      border-radius: 5px;
      cursor: pointer;
    }
  }
`