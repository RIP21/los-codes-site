import React from 'react'
import { TextProps, Text } from 'src/components/Text'

export const Paragraph: React.FC<TextProps> = (props) => (
  <Text as="p" variant="p" {...props} />
)
export const H1: React.FC<TextProps> = (props) => <Text as="h1" variant="h1" {...props} />
export const H2: React.FC<TextProps> = (props) => <Text as="h2" variant="h2" {...props} />
export const H3: React.FC<TextProps> = (props) => <Text as="h3" variant="h3" {...props} />
export const H4: React.FC<TextProps> = (props) => <Text as="h4" variant="h4" {...props} />
export const H5: React.FC<TextProps> = (props) => <Text as="h5" variant="h5" {...props} />
