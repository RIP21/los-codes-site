import { Box, Flex } from 'reflexbox/styled-components'
import React from 'react'

export const Container: React.FC = ({ children }) => (
  <Flex justifyContent="center">
    <Box as="section" width="100%" maxWidth="container" px={2}>
      {children}
    </Box>
  </Flex>
)
