import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import { PageTitle } from '../components/Shared'

export default () => {
  return (
    <div>
      <Header page="contact" />
      <PageTitle>Send me a message</PageTitle>
      <div style={{ margin: '1rem 10%', paddingBottom: '1rem' }}>
        <p>
          If you have an interesting weekend project for me, have a question or
          comment on one of my blog posts, or just want to say hi. Feel free to
          contact me. I am also available for hire!
        </p>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}
