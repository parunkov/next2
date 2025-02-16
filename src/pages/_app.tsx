import { FC } from 'react'
import type { AppProps } from 'next/app'
import { Manrope } from 'next/font/google'
import '@/styles/globals.scss'

const manrope = Manrope({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
})

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <main className={manrope.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp 