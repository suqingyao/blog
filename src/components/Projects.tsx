import config from '@/config'

export default function Projects() {
  const { projects, github } = config
  function openLink() {
    window.open(github, '_bank')
  }

  return (
    <>
      <h2 className="flex items-center mt-14 mb-4 font-semibold text-3xl">
        <span className="outfit flex-1">Projects</span>
        <div
          onClick={openLink}
          className="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer"
        >
          <div className="m-2 i-ri-arrow-right-up-line" />
        </div>
      </h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </>
  )
}

function Project({ project }: { project: Project }) {
  return (
    <a
      className="px-4 py-3 rounded-md bg-gray-50 transition-colors decoration-none hover:bg-gray-100 dark:bg-gray-50/10 dark:hover:bg-gray-50/20"
      href={project.repo}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex h-full items-center justify-center">
        <div className="flex-1">
          <div className="font-medium leading-relaxed">{project.title}</div>
          <div className="op-50 font-normal text-sm">{project.desc}</div>
        </div>
        <div className="ml-4 text-4xl op-80 flex">
          <div className={project.icon} />
        </div>
      </div>
    </a>
  )
}
