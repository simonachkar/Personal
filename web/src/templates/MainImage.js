import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import clientConfig from '../../client-config'

const Figure = styled.div`
  padding: 1rem 0;
`
const Image = styled(Img)`
  position: absolute;
  margin: 0;
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
