import ListProvider from '@/components/lists/ListProvider'
import classNames from 'classnames'
import React from 'react'

const UnorderedList: React.FC<JSX.IntrinsicElements['ul']> = props => {
  const { className = '', ...rest } = props
  const isTaskList = className.includes('contains-task-list')

  return (
    <ListProvider type={isTaskList ? 'tl' : 'ul'}>
      <ul {...rest} className={classNames(className, 'my-6')} />
    </ListProvider>
  )
}

export default UnorderedList
