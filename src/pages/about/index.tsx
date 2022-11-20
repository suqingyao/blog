import React, { PropsWithChildren } from 'react'
import style from './styles.module.scss'
import classNames from 'classnames'
import Link from 'next/link'

const Tag: React.FC<PropsWithChildren> = props => {
  return (
    <span className="inline-block rounded border bg-amber-500/10 text-amber-900 border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-500 px-2 py-1 text-xs leading-none">
      {props.children}
    </span>
  )
}

export default function About() {
  return (
    <div className={classNames('container py-12', style.about)}>
      <h2>About me</h2>
      <div className="flex items-start flex-wrap gap-2">
        <Tag>Vue</Tag>
        <Tag>React</Tag>
        <Tag>TypeScript</Tag>
        <Tag>NodeJS</Tag>
        <Tag>Canvas</Tag>
        <Tag>NestJS</Tag>
        <Tag>Next.js</Tag>
        ...
      </div>
      <h2>📮 </h2>
      <ul>
        <li>
          Email -{' '}
          <Link href="mailto:cullyfung@gmail.com">cullyfung@gmail.com</Link>
        </li>
        <li>
          Github -{' '}
          <Link href="https://github.com/cullyfung">
            https://github.com/cullyfung
          </Link>
        </li>
      </ul>
    </div>
  )
}
