import React from 'react'

import Layout from '../components/Layout'
import Contact from '../components/Contact'
import { PageTitle, Text } from '../components/Shared'
import SEO from '../components/SEO'

export default () => {
  return (
    <div>
      <Layout page="contact">
      <SEO title="Simon Achkar | Full-Stack Developer" />
        <PageTitle>Send me a message</PageTitle>
        <Text>
          If you have an interesting weekend project for me, have a question or
          comment on one of my blog posts, or just want to say hi. Feel free to
          contact me. I am also available for hire!
        </Text>
        <Contact />
      </Layout>
    </div>
  )
}
