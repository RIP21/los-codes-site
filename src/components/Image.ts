import { Box, BoxProps } from 'reflexbox/styled-components'
import styled from 'styled-components'

export const Image = styled(Box)<BoxProps & JSX.IntrinsicElements['img']>({})
Image.defaultProps = {
  as: 'img',
}
