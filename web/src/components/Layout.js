import React from 'react'
import styled from 'styled-components'

import { sizes } from '../utils/global'
import Header from './Header'
import Footer from './Footer'

const Margin = styled.div`
  margin: 1rem 10%;
  @media (max-width: ${sizes.medium}) {
    margin: 1rem 4%;
  }
`

export default ({ children, page, header = true }) => {
  return (
    <div>
      {header ? <Header page={page} /> : undefined}
      <Margin>{children}</Margin>
      <Footer />
    </div>
  )
}
