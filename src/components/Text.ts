import styled from 'styled-components'
import { Box, BoxProps } from 'reflexbox/styled-components'
import { typography, TypographyProps, variant, compose } from 'styled-system'

export type TextProps<T extends keyof JSX.IntrinsicElements = 'p'> = BoxProps<T> &
  TypographyProps & {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'default'
  }

export const Text = styled(Box)<TextProps>(
  compose(
    variant({
      scale: 'text',
      variants: {
        default: {
          mt: 1,
          fontFamily: 'body',
          lineHeight: 'body',
          fontWeight: 'body',
          fontSize: 1,
        },
        h1: {
          mt: 2,
          fontFamily: 'heading',
          lineHeight: 'heading',
          fontWeight: 'body',
          fontSize: 4,
        },
        h2: {
          mt: 1,
          fontFamily: 'heading',
          lineHeight: 'heading',
          fontWeight: 'body',
          fontSize: 3,
        },
        h3: {
          mt: 1,
          fontFamily: 'heading',
          lineHeight: 'heading',
          fontWeight: 'body',
          fontSize: 2,
        },
        h4: {
          mt: 1,
          fontFamily: 'heading',
          lineHeight: 'heading',
          fontWeight: 'bold',
          fontSize: 1,
        },
        h5: {
          mt: 1,
          fontFamily: 'heading',
          lineHeight: 'heading',
          fontWeight: 'bold',
          fontSize: 0,
        },
        p: {
          mt: 1,
          fontFamily: 'body',
          lineHeight: 'body',
          fontWeight: 'body',
          fontSize: 1,
        },
      },
    }),
    typography,
  ),
)
Text.defaultProps = {
  variant: 'default',
}
