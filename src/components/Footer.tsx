import config from '@/config'
export default function Footer() {
  return (
    <footer className={'my-12 text-center dark:text-white'}>
      <p className="op-40">
        Built with &nbsp;
        <a href="https://nextjs.org" className="text-blue-5 no-underline">
          Next.js
        </a>
        &nbsp; • Deployed on &nbsp;
        <a href="https://vercel.com" className="text-blue-5">
          Vercel
        </a>
      </p>
      <p className={'text-sm op-40'}>
        &copy;{2022}&nbsp;{config.name}
      </p>
    </footer>
  )
}
