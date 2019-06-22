import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import clientConfig from '../../client-config'

const Figure = styled.div`
  padding: 2rem 0;
  margin-left: auto;
  margin-right: auto;
`
const Image = styled(Img)`
  height: 25vmax;
`

export default ({ img }) => {
  const fluidProps = getFluidGatsbyImage(
    img.asset._ref,
    { maxWidth: 800 },
    ...clientConfig.sanity
  )
  return (
    <Figure>
      <Image fluid={fluidProps} alt={img.alt} />
      <figcaption>{img.caption}</figcaption>
    </Figure>
  )
}
