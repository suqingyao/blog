import Image from 'next/image'

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center mt-20">
      <Image
        src="/404.svg"
        alt="404 not found"
        layout="fill"
        className="w-full sm:w-1/2"
      />
    </div>
  )
}
