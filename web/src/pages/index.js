import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import PostsList from '../components/PostsList';
import { Line, Title, Subtitle } from '../components/Shared'

export default () => {
  return (
    <div>
      <Header page="home" />
      <Hero />
      <Title>Sometimes I write </Title>
      <PostsList limit />
      <Subtitle clickable>Read my Blog <small>></small></Subtitle>
      <Footer />
    </div>
  )
}
