import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default () => {
  return (
    <div>
      <Header page="home" />
      <Hero />
      <Footer />
    </div>
  )
}
