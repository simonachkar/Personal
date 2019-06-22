import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { sizes } from '../utils/global'
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

const Tag = styled.span`
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  padding: 0.2rem 0.5rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  @media (max-width: ${sizes.giant}) {
    font-size: 0.8vmax;
  }
  @media (max-width: ${sizes.large}) {
    font-size: 1.2vmax;
  }
  @media (max-width: ${sizes.medium}) {
    font-size: 2vmax;
  }
`

const BlogPostTemplate = props => {
  const post = props.data.sanityPost
  return (
    <div>
      <Header />
      <PostTitle>{post.title}</PostTitle>
      <div style={{ marginLeft: '10%' }}>
        {post.tags.map(tag => (
          <Tag bgColor={tag.bgColor.hex} textColor={tag.textColor.hex}>
            #{tag.name}
          </Tag>
        ))}
      </div>
      <div style={{ margin: '2.5rem 10%', paddingBottom: '1rem' }}>
        <BlockContent blocks={post._rawBody} />
      </div>
      <Footer />
    </div>
  )
}

export default BlogPostTemplate
