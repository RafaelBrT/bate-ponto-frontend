'use client'
import FooterComponent from '@components/footer-component'
import NavbarComponent from '@components/navbar'

import { AboutPageWrapper,Card } from './style'

const AboutPage = () => {
  return (
    <main>
      <NavbarComponent />
      <AboutPageWrapper>
        <Card>
          <h1>BATEPONTO RELÓGIOS</h1>
          <p>A Bateponto é a maior e mais tradicional empresa especializada em soluções para controle e gestão de ponto de Curitiba. No mercado desde julho de 1987, a Bate Ponto especializou-se no comércio e manutenção de relógios pontos e acessórios para estes, conhecendo as necessidades do mercado a ponto de desenvolver um sofisticado equipamento de ponto para profissionais de segurança (vigias). Nossa empresa tem por excelência sua pontualidade em Fone e a atenção total na busca de soluções, que sejam com total segurança a melhor relação custo benefício do mercado.</p>
        </Card>
      </AboutPageWrapper>
      <FooterComponent />
    </main>
  )
}

export default AboutPage