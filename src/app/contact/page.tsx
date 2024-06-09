'use client'
import FooterComponent from '@components/footer-component'
import NavbarComponent from '@components/navbar'

import { Card, ContactPageWrapper, Info, InfoWrapper } from './style'

const ContactPage = () => {
  return (
    <main>
      <NavbarComponent />
      <ContactPageWrapper>
        <Card>
          <div>
            <iframe
              width="800px"
              height="600px"
              frameBorder="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=pt-BR&amp;q=Rua%20Jer%C3%B4nimo%20de%20Albuquerque%20Maranh%C3%A3o,%20N%C2%BA%20125,%20Curitiba/PR.+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
            </iframe>
          </div>
          <InfoWrapper>
            <Info>
              <p>Endereço</p>
              <p>
                Rua Jerônimo de Albuquerque Maranhão, 125
                Curitiba/PR
              </p>
            </Info>
            <Info>
              <p>Telefones</p>
              <p>
                +55 (41) 3273-3030
              </p>
              <p>
                +55 (41) 99829-7654
              </p>
            </Info>
            <Info>
              <p>E-mail</p>
              <p>
                bateponto@bateponto.com.br
              </p>
            </Info>
          </InfoWrapper>
        </Card>
      </ContactPageWrapper>
      <FooterComponent />
    </main>
  )
}

export default ContactPage