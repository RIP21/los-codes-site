import { Box, BoxProps } from 'reflexbox/styled-components'
import styled from 'styled-components'

export const Image = styled(Box)<BoxProps<'img'>>({})
Image.defaultProps = {
  as: 'img',
}
