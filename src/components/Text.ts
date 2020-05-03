import styled from 'styled-components'
import { Box, BoxProps } from 'reflexbox/styled-components'
import { typography, TypographyProps, variant, compose } from 'styled-system'

export type TextProps = BoxProps &
  TypographyProps & {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'default'
  }

export const Text = styled(Box)<TextProps>(
  compose(
    typography,
    variant({
      scale: 'text',
      variants: {
        default: {
          fontFamily: 'body',
          lineHeight: 'body',
          fontWeight: 'body',
          fontSize: 1,
        },
        h1: {
          fontFamily: 'heading',
          lineHeight: 'heading',
          fontWeight: 'body',
          fontSize: 4,
        },
        h2: {
          fontFamily: 'heading',
          lineHeight: 'heading',
          fontWeight: 'body',
          fontSize: 3,
        },
        h3: {
          fontFamily: 'heading',
          lineHeight: 'heading',
          fontWeight: 'body',
          fontSize: 2,
        },
        h4: {
          fontFamily: 'heading',
          lineHeight: 'heading',
          fontWeight: 'bold',
          fontSize: 1,
        },
        h5: {
          fontFamily: 'heading',
          lineHeight: 'heading',
          fontWeight: 'bold',
          fontSize: 0,
        },
        p: {
          fontFamily: 'body',
          lineHeight: 'body',
          fontWeight: 'body',
          fontSize: 1,
        },
      },
    }),
  ),
)
Text.defaultProps = {
  variant: 'default',
}
