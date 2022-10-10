import 'uno.css'
import '@unocss/reset/tailwind.css'
import '@/styles/globals.scss'
import '@/styles/font.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@/components/layout'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cully Fung Website</title>
        <meta name="description" content="cully fung personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
