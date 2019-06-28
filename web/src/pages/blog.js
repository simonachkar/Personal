import React from 'react'
import Layout from '../components/Layout'
import AllPosts from '../components/AllPosts'
import { PageTitle } from '../components/Shared'
import SEO from '../components/SEO'

export default () => (
  <div>
    <Layout page="blog">
      <SEO title="Simon Achkar | Full-Stack Developer" />
      <PageTitle>Simon's Blog</PageTitle>
      <AllPosts />
    </Layout>
  </div>
)
