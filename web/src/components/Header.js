import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { colors, sizes } from '../utils/global'
import logo from '../assets/images/logo.png'

const Header = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${sizes.giant}) {
    padding: 0 20vmax;
    padding-top: 1rem;
  }

  @media (max-width: ${sizes.large}) {
    padding: 0 20vmax;
    padding-top: 0.75rem;
  }

  @media (max-width: ${sizes.medium}) {
    padding: 0 10vmax;
    padding-top: 0.75rem;
  }

  @media (max-width: ${sizes.small}) {
    padding: 0 5vmax;
    padding-top: 0.75rem;
  }
`

const HeaderImg = styled.img`
  margin-top: 1rem;

  @media (max-width: ${sizes.giant}) {
    width: 4.5rem;
  }

  @media (max-width: ${sizes.large}) {
    width: 3.5rem;
  }

  @media (max-width: ${sizes.medium}) {
    width: 2.75rem;
  }

  @media (max-width: ${sizes.small}) {
    width: 2.5rem;
  }
`

const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  overflow: hidden;
`

const MenuItem = styled(Link)`
  float: left;
  margin-left: 3rem;
  border-bottom: ${props =>
    props.active ? `7px solid ${colors.primary}` : `7px solid white`};
  color: black;
  text-decoration: none;
  &:hover {
    color: ${colors.hover};
  }

  @media (max-width: ${sizes.giant}) {
    font-size: 25px;
  }

  @media (max-width: ${sizes.large}) {
    font-size: 20px;
  }

  @media (max-width: ${sizes.medium}) {
    margin-left: 1.75rem;
    font-size: 16px;
  }

  @media (max-width: ${sizes.small}) {
    margin-left: 1rem;
    font-size: 13px;
  }
`
export default ({ page }) => {
  return (
    <Header>
      <MenuItem to="/">
        <HeaderImg src={logo} alt="logo" />
      </MenuItem>
      <Menu>
        <MenuItem to="/about" active={page === 'about'}>
          About Me
        </MenuItem>
        <MenuItem to="/blog" active={page === 'blog'}>
          My Blog
        </MenuItem>
        <MenuItem to="/contact" active={page === 'contact'}>
          Contact Me
        </MenuItem>
      </Menu>
    </Header>
  )
}
