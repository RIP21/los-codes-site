import React from 'react'
import { PostTemplate } from 'src/templates/post'


export const PostPreview: React.FC = ({ entry, widgetFor }: any) => {
  const { tags, title, date } = entry.toJS().data
  return (
    <PostTemplate
      tags={tags as string[] | undefined}
      title={title}
      date={date}
      content={widgetFor('body')}
    />
  )
}
