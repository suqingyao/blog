import ListProvider from '@/components/lists/ListProvider'
import classNames from 'classnames'
import React from 'react'

const OrderedList: React.FC<JSX.IntrinsicElements['ol']> = props => {
  const { className = '', ...rest } = props

  return (
    <ListProvider type="ol">
      <ol {...rest} className={classNames(className, 'my-6')} />
    </ListProvider>
  )
}

export default OrderedList
