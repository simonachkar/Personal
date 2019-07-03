import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Img from 'gatsby-image'

import { colors, sizes } from '../utils/global'

const Hero = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 3vw;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Avatar = styled(Img)`
  transform: rotate(30deg);
  margin: auto;
  padding: 20px;
  border-bottom: 1vmax solid ${colors.primary};
  &:after,
  &:before {
    content: ' ';
    background-color: ${colors.primary};
    padding: 50%;
    height: 400rem;
    width: 400rem;
  }
  width: 35vmax;
  @media (max-width: ${sizes.giant}) {
    margin-bottom: 6rem;
  }
  @media (max-width: ${sizes.large}) {
    margin-bottom: 1rem;
  }
  @media (max-width: ${sizes.medium}) {
    width: 70vmax;
  }
`

const Text = styled.div`
  width: 40%;
  @media (max-width: ${sizes.medium}) {
    width: 100%;
  }
`

const BigText = styled.h1`
  font-weight: 900;
  font-size: 5vmax;
  @media (max-width: ${sizes.medium}) {
    font-size: 8vmax;
  }
`

const SmallText = styled.p`
  font-size: 1.6vmax;
  font-weight: 300;
  @media (max-width: ${sizes.medium}) {
    font-size: 3vmax;
  }
`

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        fileName: file(relativePath: { eq: "images/me.png" }) {
          childImageSharp {
            fluid(maxHeight: 700) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )
  return (
    <Hero>
      <Avatar fluid={data.fileName.childImageSharp.fluid} alt="" />
      <Text>
        <BigText>Oops!</BigText>
        <SmallText>
          You just hit a route that doesn&#39;t exist... the sadness.
        </SmallText>
        <Link to="">Go back home 🏠</Link>
      </Text>
    </Hero>
  )
}
