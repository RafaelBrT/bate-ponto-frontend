'use client'
import { FooterBottom, FooterComponentWrapper, FooterMedia, FooterTop } from './style'

const FooterComponent = () => {
  return (
    <FooterComponentWrapper>
      <FooterTop>
        <div className="div-left">
          <p className='title'>
            Bate Ponto
          </p>
          <p className='description'>
            Soluções em controle de ponto, controle de acesso e automação empresarial.
          </p>
        </div>
        <div className="div-center">
          <p className='title secondary'>
            Bate Ponto
          </p>
          <p className='description'>
            Soluções em controle de ponto, controle de acesso e automação empresarial.
          </p>
        </div>
        <div className="div-right">
          <p className='title secondary'>
            Bate Ponto
          </p>
          <p className='description'>
            Soluções em controle de ponto, controle de acesso e automação empresarial.
          </p>
        </div>
      </FooterTop>
      <FooterMedia>
        <p>Media 1</p>
        <p>Media 2</p>
        <p>Media 3</p>
      </FooterMedia>
      <FooterBottom>
        <p>© 2024 Bateponto Relógios. Todos os direitos reservados.</p>
        <p>Site desenvolvido por: Rafael Bueno</p>
      </FooterBottom>
    </FooterComponentWrapper>
  )
}

export default FooterComponent