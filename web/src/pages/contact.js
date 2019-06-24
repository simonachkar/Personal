import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import { PageTitle, Text } from '../components/Shared'

export default () => {
  return (
    <div>
      <Header page="contact" />
      <PageTitle>Send me a message</PageTitle>
      <Text>
        If you have an interesting weekend project for me, have a question or
        comment on one of my blog posts, or just want to say hi. Feel free to
        contact me. I am also available for hire!
      </Text>
      <Contact />
      <Footer />
    </div>
  )
}
