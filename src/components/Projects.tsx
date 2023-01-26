import config from '@/config'
import { animated, useSpring, useTrail } from '@react-spring/web'
import AppLink from './AppLink'

const Projects = () => {
  const { projects, github } = config

  const titleStyle = useSpring({
    from: { x: 100, opacity: 0 },
    to: { x: 0, opacity: 1 }
  })

  const trail = useTrail(projects.length, {
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 }
  })

  return (
    <>
      <h2 className="flex items-center mt-14 mb-4 font-semibold text-3xl">
        <animated.span className="outfit flex-1" style={titleStyle}>
          Projects
        </animated.span>
        <AppLink
          href={github}
          className="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer"
        >
          <div className="m-2 i-ri-arrow-right-up-line" />
        </AppLink>
      </h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {trail.map(({ y, ...rest }, index) => (
          <animated.div
            key={index}
            style={{ ...rest, transform: y.to(y => `translate3d(0,${y}px,0)`) }}
          >
            <Card project={projects[index]} />
          </animated.div>
        ))}
      </div>
    </>
  )
}

const Card = ({ project }: { project: Project }) => {
  return (
    <AppLink
      href={project.repo}
      className="px-4 py-3 rounded-md bg-gray-50 transition-colors decoration-none hover:bg-gray-100 dark:bg-gray-50/10 dark:hover:bg-gray-50/20"
    >
      <div className="flex items-center justify-center">
        <div className="flex-1">
          <div className="font-medium leading-relaxed">{project.title}</div>
          <div className="op-50 font-normal text-sm">{project.desc}</div>
        </div>
        <div className="text-4xl op-80">
          <div className={project.icon} />
        </div>
      </div>
    </AppLink>
  )
}

export default Projects
