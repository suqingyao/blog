import { BackToTop, Footer, Layout, Plum } from '@/components'
import config from '@/config'
import '@/styles/index.scss'
import '@unocss/reset/tailwind.css'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import 'uno.css'

export default function App({
  Component,
  pageProps
}: AppProps & { Component: NextPageWithCustomProps }) {
  return (
    <>
      <NextNProgress color="#00DC82" options={{ showSpinner: false }} />
      <ThemeProvider attribute="class">
        <DefaultSeo title={config.title} description={config.desc} />
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <title>{config.title}</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
        <Plum />
        <BackToTop />
      </ThemeProvider>
    </>
  )
}
