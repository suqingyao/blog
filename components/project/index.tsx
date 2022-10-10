const Project = () => {
  const projectList = [
    {
      name: 'Cloud Music',
      desc: 'inspired by NetEase CloudMusic',
      link: 'https://github.com/cullyfung/cloud-music-react-vite-ts',
      icon: 'i-twemoji-newspaper'
    },
    {
      name: 'Jira',
      desc: 'inspired by jira',
      link: 'https://github.com/cullyfung/jira',
      icon: 'i-twemoji-newspaper'
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
