import useImage from '@/hooks/useImage'
import { NativeProps, withNativeProps } from '@/utils/native-props'

export interface HeroImage extends NativeProps {
  src: string
  aspectRatio?: string // 长 / 宽
}

export default function HeroImage(props: HeroImage) {
  const { src, aspectRatio = '16 / 9' } = props
  const { image, dataUrl, status } = useImage(src)

  const loading = (
    <div className="flex h-full items-center justify-center bg-slate-200/70 dark:bg-zinc-600/20 text-slate-500/50">
      <div className="i-ri:loader-2-line text-4xl animate-spin" />
    </div>
  )

  const failed = (
    <div className="flex h-full items-center justify-center bg-slate-200/70 dark:bg-zinc-600/20">
      <img
        className="opacity-10 dark:invert"
        src="/broken-image.png"
        alt="image broken"
      />
    </div>
  )

  return withNativeProps(
    props,
    <div
      className="w-full rounded-lg overflow-hidden isolate"
      style={{ aspectRatio }}
    >
      {status === 'loading' && loading}
      {status === 'loaded' && <img src={dataUrl!} alt="hero image" />}
      {status === 'failed' && failed}
    </div>
  )
}
