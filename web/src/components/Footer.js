import React from 'react'
import styled from 'styled-components'
import Github from '../assets/icons/github.svg'
import LinkedIn from '../assets/icons/linkedin.svg'
import Twitter from '../assets/icons/twitter.svg'
import Instagram from '../assets/icons/instagram.svg'

import { sizes } from '../utils/global'
import { Line } from './Shared';

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
      <Line />
      <Social>
        <Icon href="https://github.com/simonachkar" target="_blank" rel="noopener noreferrer"><Github /></Icon>
        <Icon href="https://linkedin.com/in/simonachkar" target="_blank" rel="noopener noreferrer"><LinkedIn /></Icon>
        <Icon href="https://twitter.com/simonachkar_" target="_blank" rel="noopener noreferrer"><Twitter /></Icon>
        <Icon href="https://instagram.com/simonachkar_" target="_blank" rel="noopener noreferrer"><Instagram /></Icon>
      </Social>
      <p>All content &copy; Simon Achkar</p>
      <p>This site is built with <a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a> and <a href="https://sanity.io" target="_blank" rel="noopener noreferrer">Sanity</a>. The source code is hosted on <a  href="https://github.com/simonachkar/SimonAchkar.com" target="_blank" rel="noopener noreferrer">Github</a></p>
      <p>Made with Love, Coffee, and a lot of Snacks</p>
    </Footer>
  )
}
