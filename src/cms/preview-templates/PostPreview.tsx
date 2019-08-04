import React from 'react'
import { PostTemplate } from 'src/templates/post'

export const PostPreview: React.FC = ({ entry, widgetFor }: any) => {
  return (
    <PostTemplate
      html={widgetFor('body')}
      tags={entry.getIn(['data', 'tags'])}
      title={entry.getIn(['data', 'tags'])}
    />
  )
}
