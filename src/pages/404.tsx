import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from '@/components/Image'

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <Image
        src="/404.svg"
        alt="404 not found"
        className="w-full sm:w-1/2 animate-floating"
      />
    </div>
  )
}
export const getStaticProps: GetStaticProps<any, { slug: string }> = async ({
  locale
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common']))
    }
  }
}

export default NotFoundPage
