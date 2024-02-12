import Providers from '@providers'
import { Roboto } from 'next/font/google'

const inter = Roboto({ weight: '400', subsets: ['latin'] })

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {props.children}
        </Providers>
      </body>
    </html>
  )
}