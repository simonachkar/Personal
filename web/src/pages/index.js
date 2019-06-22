import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import PostsList from '../components/PostsList'
import { Title, Subtitle } from '../components/Shared'

export default () => {
  return (
    <div>
      <Header page="home" />
      <Hero />
      <Title>Sometimes I write </Title>
      <PostsList limit />
      <Link to="/blog/" style={{ border: 'none' }}>
        <Subtitle clickable>
          Read my Blog <small>></small>
        </Subtitle>
      </Link>
      <Footer />
    </div>
  )
}
