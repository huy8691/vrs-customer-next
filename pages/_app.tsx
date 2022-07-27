import 'antd/dist/antd.css';
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Footer from './_layout/footer';
import Header from "./_layout/header"

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
}

export default MyApp
