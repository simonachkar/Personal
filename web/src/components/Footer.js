import React from 'react'
import styled from 'styled-components'
import Github from '../assets/icons/github.svg'
import LinkedIn from '../assets/icons/linkedin.svg'
import Twitter from '../assets/icons/twitter.svg'
import Instagram from '../assets/icons/instagram.svg'

import { colors, sizes } from '../utils/global'

const Footer = styled.div`
  text-align: center;
  margin: 2rem;
  p {
    margin-bottom: 0.5rem;
    @media (max-width: ${sizes.giant}) {
      font-size: 0.6vmax;
    }
    @media (max-width: ${sizes.large}) {
      font-size: 0.9vmax;
    }
    @media (max-width: ${sizes.medium}) {
      font-size: 1.5vmax;
    }
  }
`

const Social = styled.nav`
  margin-bottom: 1rem;
`

const Icon = styled.a`
  border: none;
  * {
    width: 0.8rem;
    margin: 0 0.4rem;
  }
`

export default () => {
  return (
    <Footer>
      <Social>
        <Icon href="https://github.com/simonachkar"  target="_blank"><Github /></Icon>
        <Icon href="https://linkedin.com/in/simonachkar"  target="_blank"><LinkedIn /></Icon>
        <Icon href="https://twitter.com/simonachkar_"  target="_blank"><Twitter /></Icon>
        <Icon href="https://instagram.com/simonachkar_"  target="_blank"><Instagram /></Icon>
      </Social>
      <p>All content &copy; Simon Achkar</p>
      <p>This site is built with <a href="https://gatsbyjs.org" target="_blank">Gatsby</a> and hosted on <a href="https://netlify.com" target="_blank">  Netlify</a>. The source code is hosted on <a  href="https://github.com/simonachkar/SimonAchkar.com"  target="_blank" >Github</a></p>
      <p>Made with Love, Coffee, Snacks, and Chocolate</p>
    </Footer>
  )
}
