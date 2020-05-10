import React from 'react'
import styled from 'styled-components'
import { typography, TypographyProps } from 'styled-system'
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby'
import { Box, BoxProps } from 'reflexbox/styled-components'
import merge from 'lodash/merge'

const StyledLink = styled(Box)<LinkProps>(typography)

export type LinkProps = BoxProps<'a'> & TypographyProps & GatsbyLinkProps<any>

export const Link: React.FC<LinkProps> = ({ sx, ...props }) => {
  return (
    // @ts-ignore
    <StyledLink
      as={GatsbyLink}
      sx={merge(
        {
          fontSize: 1,
          color: 'inherit',
          fontFamily: 'body',
          transition: 'color 150ms',
          ':hover': {
            color: 'hover',
          },
          ':active': {
            color: 'active',
          },
        },
        sx,
      )}
      {...props}
    />
  )
}
