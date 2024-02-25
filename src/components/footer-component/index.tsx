'use client'
import { FaFacebookSquare, FaInstagramSquare,FaWhatsappSquare  } from 'react-icons/fa'
import { motion } from 'framer-motion'

import { FooterBottom, FooterComponentWrapper, FooterMedia, FooterTop } from './style'

const FooterComponent = () => {
  const actualYear = new Date().getFullYear()
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
            Links utéis
          </p>
          <ul className='description ul'>
            <li>Home</li>
            <li>Produtos</li>
            <li>Acessórios</li>
            <li>Software</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
        </div>
        <div className="div-right">
          <p className='title secondary'>
            Contato
          </p>
          <p className='description'>
            Telefone: (41) 3273-3030
          </p>
          <p className='description'>
            E-mail: bateponto@bateponto.com.br
          </p>
          <p className='description'>
            Rua Jerônimo de Albuquerque Maranhão, Nº 125, Curitiba/PR.
          </p>
        </div>
      </FooterTop>
      <FooterMedia>
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          className='icon__animation'
        >
          <FaWhatsappSquare className='icon__whatsapp' />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          className='icon__animation'
        >
          <FaFacebookSquare className='icon__facebook' />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          className='icon__animation'
        >
          <FaInstagramSquare className='icon__instagram' />
        </motion.div>
      </FooterMedia>
      <FooterBottom>
        <p>
          © 
          {' '}
          {actualYear}
          {' '}
          Bateponto Relógios. Todos os direitos reservados.
        </p>
        <p>Site desenvolvido por: Rafael Bueno</p>
      </FooterBottom>
    </FooterComponentWrapper>
  )
}

export default FooterComponent