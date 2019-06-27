import React from 'react'
import Layout from '../components/Layout'
import AllPosts from '../components/AllPosts'
import { PageTitle } from '../components/Shared'

export default () => (
  <div>
    <Layout page="blog">
      <PageTitle>Simon's Blog</PageTitle>
      <AllPosts />
    </Layout>
  </div>
)
