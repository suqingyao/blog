export const projects: Project[] = [
  {
    title: 'Cloud Music',
    desc: 'inspired by NetEase CloudMusic',
    repo: 'https://github.com/cullyfung/netease-cloud-music-react',
    icon: 'i-twemoji-musical-notes'
  },
  {
    title: 'Jira',
    desc: 'inspired by jira',
    repo: 'https://github.com/cullyfung/jira',
    icon: 'i-twemoji-bookmark-tabs'
  }
]

const config = {
  name: 'cullyfung',
  title: "CullyFung's Blog",
  desc: "Hi, I'm Cully Fung. Front-end developer. Currently working in Chongqing. I love coding.",
  avatar: '/avatar.png',
  logo: '/avatar.png',
  github: 'https://github.com/cullyfung',
  projects
}

export const linkList: Array<{ url: string; title: string; icon?: string }> = [
  {
    url: '/',
    title: 'Home',
    icon: 'i-ri:home-heart-line md:hidden'
  },
  {
    url: '/posts',
    title: 'Posts',
    icon: 'i-ri-article-line md:hidden'
  },
  {
    url: '/about',
    title: 'About',
    icon: 'i-ri:game-fill md:hidden'
  },
  {
    url: config.github,
    title: 'Github',
    icon: 'i-ri-github-line md:hidden'
  }
]

export default config
