import React from 'react'
import Microlink from '@microlink/react'
import styled from 'styled-components'

const Card = styled(Microlink)`
  margin: 1rem 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

export default ({ url }) => {
  return <Card url={url} />
}
