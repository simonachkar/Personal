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

export default ({ children, page }) => {
  return (
    <div>
      <Header page={page} />
      <Margin>{children}</Margin>
      <Footer />
    </div>
  )
}
