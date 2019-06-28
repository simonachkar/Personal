import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import PostsList from '../components/PostsList'
import { Title, Subtitle } from '../components/Shared'
import SEO from '../components/SEO'

export default () => {
  return (
    <div>
      <Layout page="home">
        <SEO title="Simon Achkar | Full-Stack Developer" />
        <Hero />
        <Title>Sometimes I write </Title>
        <PostsList limit />
        <Link to="/blog/" style={{ border: 'none' }}>
          <Subtitle clickable>
            Read my Blog <small>></small>
          </Subtitle>
        </Link>
      </Layout>
    </div>
  )
}
