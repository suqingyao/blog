import { animated, useSpring } from '@react-spring/web'

const Hero = () => {
  const order1 = useSpring({
    from: {
      y: 50,
      opacity: 0
    },
    to: {
      y: 0,
      opacity: 1
    }
  })

  const order2 = useSpring({
    from: {
      y: 50,
      opacity: 0
    },
    to: {
      y: 0,
      opacity: 1
    },
    delay: 100
  })

  const order3 = useSpring({
    from: {
      y: 50,
      opacity: 0
    },
    to: {
      y: 0,
      opacity: 1
    },
    delay: 200
  })
  const order4 = useSpring({
    from: {
      y: 50,
      opacity: 0
    },
    to: {
      y: 0,
      opacity: 1
    },
    delay: 300
  })
  const order5 = useSpring({
    from: {
      y: 50,
      opacity: 0
    },
    to: {
      y: 0,
      opacity: 1
    },
    delay: 400
  })

  return (
    <section className={'outfit'}>
      <div className="text-5xl font-bold flex flex-col gap-1">
        <animated.p style={order1}>Hi,</animated.p>
        <animated.p style={order2}>I&apos;m Cully Fung.</animated.p>
        <animated.p style={order3}>Front-end developer.</animated.p>
      </div>
      <div className="mt-6 flex flex-col gap-1 text-base">
        <animated.p style={order4}>Currently working in Chongqing. </animated.p>
        <animated.p style={order5}>I love coding.</animated.p>
      </div>
    </section>
  )
}

export default Hero
