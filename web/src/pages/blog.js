import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PostsList from '../components/PostsList'
import { PageTitle } from '../components/Shared'

export default () => (
  <div>
    <Header page="blog" />
    <PageTitle>Simon's Blog</PageTitle>
    <PostsList />
    <Footer />
  </div>
)
