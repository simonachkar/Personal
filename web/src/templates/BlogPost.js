import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import moment from 'moment'
import { sizes } from '../utils/global'
import Header from '../components/Header'
import { PostTitle } from '../components/Shared'
import BlockContent from './BlockContent'
import MainImage from './MainImage'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

export const query = graphql`
  query($id: String!) {
    sanityPost(id: { eq: $id }) {
      id
      title
      brief
      publishedAt
      _rawBody
      _rawMainImage
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
  console.log(post)
  let tags = []
  {
    post.tags.map(tag => tags.push(tag))
  }
  return (
    <div>
      <Layout>
        <SEO title={post.title} keywords={tags} description={post.brief} />
        {post._rawMainImage ? (
          <MainImage img={post._rawMainImage} />
        ) : (
          undefined
        )}
        <PostTitle>{post.title}</PostTitle>
        <div style={{ marginBottom: '0.5rem', fontStyle: 'italic' }}>
          <b>Published on</b> {moment(post.publishedAt).format('MMMM Do YYYY')}
        </div>
        <div style={{ marginBottom: '2.5rem' }}>
          {post.tags.map(tag => (
            <Tag bgColor={tag.bgColor.hex} textColor={tag.textColor.hex}>
              # {tag.name}
            </Tag>
          ))}
        </div>
        <div style={{ paddingBottom: '1rem' }}>
          <BlockContent blocks={post._rawBody} />
        </div>
      </Layout>
    </div>
  )
}

export default BlogPostTemplate
