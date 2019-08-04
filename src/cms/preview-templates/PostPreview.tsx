import React from 'react'
import { PostTemplate } from 'src/templates/post'
import { MarkdownRemarkFrontmatter } from '../../types.generated'

export const PostPreview: React.FC = ({ entry, widgetFor }: any) => {
  const { tags, title, date } = entry.toJS().data as MarkdownRemarkFrontmatter
  return (
    <PostTemplate
      tags={tags as string[] | undefined}
      title={title}
      date={date}
      content={widgetFor('body')}
    />
  )
}
