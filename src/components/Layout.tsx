import React from 'react'
import { Link, LinkProps } from 'src/components/Link'
import theme from 'src/theme'
import { Flex, Box } from 'reflexbox/styled-components'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import 'normalize.css'
import house from './home.svg'
import { useMatch } from '@reach/router'
import { Paragraph } from './Typography'

const GlobalStyle = createGlobalStyle({
  body: {
    overflowY: 'scroll',
  },
})

const NavLink: React.FC<LinkProps> = (props) => {
  const match = useMatch(props.to)
  const linkCustomStyles = {
    fontWeight: 'bold',
    fontSize: 2,
    textDecoration: 'none',
  }
  return match && props.to !== '/' ? (
    <Box
      py={2}
      sx={{
        position: 'relative',
      }}
    >
      <Link sx={linkCustomStyles} {...props} />
      <Box
        sx={{
          bg: 'primary',
          width: '100%',
          position: 'absolute',
          height: '4px',
          bottom: '-4px',
        }}
      />
    </Box>
  ) : (
    <Box py={2}>
      <Link sx={linkCustomStyles} {...props} />
    </Box>
  )
}

const NavigationBar = () => (
  <>
    <Box bg="primary" height="4px" width={1} margin="auto" />
    <Flex
      allignItems="center"
      justifyContent="center"
      sx={{
        boxShadow: 'nav',
      }}
    >
      <Flex
        as="nav"
        width={1}
        flexDirection={['column', 'row']}
        maxWidth="container"
        alignItems="center"
        justifyContent="space-between"
        px={2}
      >
        <NavLink to="/">
          <img src={house} alt="home icon" />
        </NavLink>
        <NavLink to="/talks">Talks</NavLink>
        <NavLink to="/open-source">Open Source</NavLink>
        <NavLink to="/tags">Tags</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/uses">Uses</NavLink>
      </Flex>
    </Flex>
  </>
)

export const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Flex
        as="header"
        minHeight="100vh"
        width="100%"
        flexDirection="column"
        justifyContent="space-between"
      >
        <GlobalStyle />
        <Box as="main">
          <NavigationBar />
          {children}
        </Box>
        <Flex as="footer" justifyContent="center" alignItems="center" bg="primary" mt={2}>
          <Paragraph color="background" py={2}>
            Made by Andrii Los aka @RIP21 or @RIP212. All opinions are mine. Quoting of
            contents with mention is greatly appreciated
          </Paragraph>
        </Flex>
      </Flex>
    </ThemeProvider>
  )
}
