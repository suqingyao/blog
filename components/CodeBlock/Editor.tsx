import LiveEditor, { LiveEditorProps } from '@/components/playground/LiveEditor'
import React from 'react'

const Editor: React.FC<LiveEditorProps> = props => {
  return <LiveEditor {...props} />
}

export default Editor
