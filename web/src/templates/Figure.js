import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import clientConfig from '../../client-config'

const Figure = styled.div`
  padding: 2rem;
  width: 10rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

export default ({ img }) => {
  const fluidProps = getFluidGatsbyImage(
    img.node.asset._ref,
    { maxWidth: 50 },
    ...clientConfig.sanity
  )
  return (
    <Figure>
      <Img fluid={fluidProps} alt={img.node.alt} />
      <figcaption>{img.node.caption}</figcaption>
    </Figure>
  )
}
