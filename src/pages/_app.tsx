import '@unocss/reset/tailwind.css'
import 'uno.css'
import '@/styles/font.css'
import '@/styles/globals.scss'
import '@/styles/markdown.scss'
import '@/styles/highlighting.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@/components/Layout'
import NextNProgress from 'nextjs-progressbar'
import Footer from '@/components/Footer'
import Plum from '@/components/Plum'
import config from '@/config'
import BackToTop from '@/components/BackToTop'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import { IconContext } from 'react-icons'

export default function App({
  Component,
  pageProps
}: AppProps & { Component: NextPageWithCustomProps }) {
  return (
    <>
      <NextNProgress color="#395" options={{ showSpinner: false }} />
      <ThemeProvider attribute="class">
        <IconContext.Provider value={{ className: 'icon' }}>
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
        </IconContext.Provider>
      </ThemeProvider>
    </>
  )
}
