import '@unocss/reset/tailwind.css'
import 'uno.css'
import '@/styles/globals.scss'
import '@/styles/font.css'
import '@/styles/nprogress.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { Router } from 'next/router'
import nProgress from 'nprogress'
import { AppProviders } from '@/context'
Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeError', nProgress.done)
Router.events.on('routeChangeComplete', nProgress.done)

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cully Fung Website</title>
        <meta name="description" content="cully fung personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppProviders>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProviders>
    </>
  )
}

export default App
