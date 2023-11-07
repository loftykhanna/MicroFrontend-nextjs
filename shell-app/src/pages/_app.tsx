import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import LeftNav from '@/components/LeftNav'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
        <Header/>
        <div className='container'>
        <div className='nav'>
  <LeftNav/>
        </div>
        <div className='content'>
        <Component {...pageProps} />
        </div>
        </div>
          <Footer/>
  </>
}
