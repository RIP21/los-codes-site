import { rem } from 'polished'

const theme = {
  colors: {
    primary: '#C46316',
    accent: '#EEAB24',
    active: '#C46316',
    hover: '#EEAB24',
    focus: '#EEAB24',
    muted: '#949494',
    background: '#ffffff',
    text: '#1F1F1F',
    mutedText: '#949494',
  },
  sizes: {
    container: rem(612),
  },
  space: [0, rem(8), rem(16)],
  fontSizes: [8, 16, 20, 24, 32],
  fonts: {
    body: 'Lato, system-ui, sans-serif',
    heading: 'Lato, system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 500,
    heading: 500,
    bold: 700,
  },
  shadows: {
    nav: '0px 4px 16px rgba(0, 0, 0, 0.1)',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
}

export default theme

export type ThemeType = typeof theme
