import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { PageTitle } from '../components/Shared'


export default () => (
  <div>
    <Header page="about" />
    <div style={{ margin: '1rem 10%', paddingBottom: '1rem' }}>
      <PageTitle>About Me</PageTitle>
      <p>
        If I were to describe myself in one sentence, I would say that I am a
        person that loves the art of creating. “To Create” is a divine act, it
        brings out the God within us. Ok… so, this is a quick story about me.
      </p>
      <p>
        I was born and raised in a beautiful chaotic country called Lebanon. I
        did my Bachelors in Software Engineering at the University of Balamand
        and worked for one year as a freelance web developer, alongside other
        jobs mainly including IT work.
      </p>
      <p>
        I spent 22 years of my life in Lebanon and then decided to move to
        Canada for my Masters degree.
      </p>
      <p>
        At the moment, I am pursuing my Masters in Computing and Data Analytics
        in Halifax, NS at Saint Mary’s University and working as a Full-Stack
        developer at <a href="https://gbstech.com">GBS Technologies</a>.
      </p>
      <p>
        I still consider myself to be on a journey of finding myself. While on
        this journey, I create stuff and by stuff, I mean websites, web apps,
        and mobile apps and even music and art.
      </p>
      <p>
        Got an interesting weekend project? <Link to="contact">Hit me up</Link>.
      </p>
    </div>
    <Footer />
  </div>
)
