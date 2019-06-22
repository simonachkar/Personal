import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { PostTitle } from '../components/Shared'
import BlockContent from './BlockContent'

export const query = graphql`
  query($id: String!) {
    sanityPost(id: { eq: $id }) {
      id
      title
      brief
      _rawBody
      slug {
        current
      }
      tags {
        name
        bgColor {
          hex
        }
        textColor {
          hex
        }
      }
    }
  }
`

const BlogPostTemplate = props => {
  const post = props.data.sanityPost
  return (
    <div>
      <Header />
      <PostTitle>{post.title}</PostTitle>
      <div style={{ margin: '1rem 10%', paddingBottom: '1rem' }}>
      <BlockContent blocks={post._rawBody} />
      </div>
      <Footer />
    </div>
  )
}

export default BlogPostTemplate
