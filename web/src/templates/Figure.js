import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import clientConfig from '../../client-config'
import { sizes } from '../utils/global'

const Figure = styled.div`
  padding: 2rem 10%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: ${sizes.medium}) {
    padding: 2rem 1%;
  }
`

export default ({ img }) => {
  const fluidProps = getFluidGatsbyImage(
    img.node.asset._ref,
    { maxWidth: 600 },
    ...clientConfig.sanity
  )
  return (
    <Figure>
      <Img fluid={fluidProps} alt={img.node.alt} />
      <figcaption>{img.node.caption}</figcaption>
    </Figure>
  )
}
