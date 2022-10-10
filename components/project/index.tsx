const Project = () => {
  const projectList = [
    {
      name: 'Ghost theme Moegi',
      desc: 'An elegant & fresh ghost theme',
      link: 'https://github.com/moegi-design/ghost-theme-Moegi',
      icon: 'i-twemoji-newspaper'
    },
    {
      name: 'bus-vis',
      desc: 'City bus visualizations of China',
      link: 'https://bus.ljl.li/',
      icon: 'i-twemoji-oncoming-bus'
    },
    {
      name: 'oreooo',
      desc: 'An oreo generater',
      link: 'https://oreo.ddiu.io/',
      icon: 'i-twemoji-cookie'
    },
    {
      name: 'Tin',
      desc: 'Mathematical arts driven by t, i and anything',
      link: 'https://tin.ddiu.io/',
      icon: 'i-twemoji-eight-spoked-asterisk'
    },
    {
      name: 'Fluent emoji maker',
      desc: 'Generate your own Fluent Emojis!',
      link: 'https://emoji.ddiu.io/',
      icon: 'i-twemoji-rolling-on-the-floor-laughing'
    },
    {
      name: 'placeholder-image',
      desc: 'Generate placeholder images by simply adding params',
      link: 'https://ph.ljl.li/',
      icon: 'i-twemoji-ice'
    },
    {
      name: "Diu's Online Riddle",
      desc: 'An online puzzle game',
      link: 'https://riddle.ddiu.me/',
      icon: 'i-twemoji-exploding-head'
    }
  ]

  const openLink = () => {
    window.open('https://github.com/cullyfung', '_blank')
  }
  return (
    <>
      <h2 className="flex items-center mt-14 mb-4 font-semibold text-3xl">
        <span className="outfit flex-1">Projects</span>
        <div
          onClick={openLink}
          className="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer">
          <div className="m-2 i-ri-arrow-right-up-line"></div>
        </div>
      </h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {projectList.map((project, index) => (
          <ProjectItem key={index} data={project} />
        ))}
      </div>
    </>
  )
}

interface ProjectItemProps {
  data: {
    name: string
    desc: string
    link: string
    icon: string
  }
}

const ProjectItem = ({ data }: ProjectItemProps) => {
  return (
    <a
      className="px-4 py-3 rounded-md bg-gray-50 transition-colors decoration-none hover:bg-gray-100 dark:bg-gray-50/10 dark:hover:bg-gray-50/20"
      href={data.link}
      target="_blank"
      rel="noreferrer">
      <div className="flex h-full items-center justify-center">
        <div className="flex-1">
          <div className="font-medium leading-relaxed">{data.name}</div>
          <div className="op-50 font-normal text-sm">{data.desc}</div>
        </div>
        <div className="ml-4 text-4xl op-80">
          <div className={data.icon} />
        </div>
      </div>
    </a>
  )
}

export default Project
