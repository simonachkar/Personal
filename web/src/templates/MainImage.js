import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import clientConfig from '../../client-config'
import { sizes } from '../utils/global'

const Figure = styled.div`
  @media (max-width: ${sizes.large}) {
    padding-bottom: 2rem;
    margin: 0 -10%;
  }
  @media (max-width: ${sizes.giant}) {
    padding-bottom: 3rem;
    margin: 0 -15%;
  }
`
const Image = styled(Img)`
  position: absolute;
  height: 30vmax;
`

export default ({ img }) => {
  const fluidProps = getFluidGatsbyImage(
    img.asset._ref,
    { maxWidth: 1500 },
    ...clientConfig.sanity
  )
  return (
    <Figure>
      <Image fluid={fluidProps} alt={img.alt} />
      <figcaption>{img.caption}</figcaption>
    </Figure>
  )
}
