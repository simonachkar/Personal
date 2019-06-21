import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { PageTitle } from '../components/Shared'

export default () => (
  <div>
    <Header page="blog" />
    <div style={{ margin: '1rem 10%' }}>
      <PageTitle>Simon's Blog</PageTitle>
    </div>
    <Footer />
  </div>
)
