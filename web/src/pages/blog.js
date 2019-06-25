import React from 'react'
import Layout from '../components/Layout'
import PostsList from '../components/PostsList'
import { PageTitle } from '../components/Shared'

export default () => (
  <div>
    <Layout page="blog">
      <PageTitle>Simon's Blog</PageTitle>
      <PostsList />
    </Layout>
  </div>
)
