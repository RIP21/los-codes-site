import React from 'react'

export const HTMLContent: React.FC<{ children: string }> = ({ children, ...rest }) => (
    <div {...rest} dangerouslySetInnerHTML={{ __html: children }} />
)

const Content: React.FC<{ children: string }> = ({ children, ...rest }) => (
    <div {...rest}>{children}</div>
)

export default Content