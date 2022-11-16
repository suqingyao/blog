import config from '@/config'

export default function Hero() {
  const describes = config.desc.split('.')

  const firstSentence = describes[0]
  const firstSentenceList = firstSentence.split(',')
  const restSentence = describes.slice(1)
  return (
    <div className={'outfit'}>
      <h1 className={'text-5xl font-bold flex flex-col gap-1'}>
        {firstSentenceList.map((sentence, index) => (
          <span key={index}>{sentence}</span>
        ))}
      </h1>
      <div className="mt-6 flex flex-col gap-1 text-base">
        {restSentence.map((sentence, index) => (
          <span key={index}>{sentence}</span>
        ))}
      </div>
    </div>
  )
}
