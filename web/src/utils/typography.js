import Typography from 'typography'
import kirkhamTheme from 'typography-theme-kirkham'
import { colors, sizes } from './global'

kirkhamTheme.googleFonts = [
  {
    name: 'Fira Sans',
    styles: ['200', '300', '400', '500', '800', '900', 'black'],
  },
]
kirkhamTheme.headerFontFamily = ['Fira Sans', 'sans-serif']
kirkhamTheme.bodyFontFamily = ['Fira Sans', 'sans-serif']
kirkhamTheme.bodyWeight = '400'
kirkhamTheme.overrideThemeStyles = () => ({
  '::selection': {
    background: colors.primary,
    color: 'white',
  },
  '::-moz-selection': {
    background: colors.primary,
    color: 'white',
  },
  a: {
    color: 'black',
    textDecoration: 'none',
    borderBottom: `2px solid ${colors.primary}`,
    '&:hover': {
      backgroundColor: colors.primary,
      color: 'white',
    },
  },
  'h1, h2, h3': {
    paddingTop: '0.8rem',
    paddingBottom: '0.2rem'
  }
})

const typography = new Typography(kirkhamTheme)

export default typography
