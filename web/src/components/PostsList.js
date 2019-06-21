import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PostPreview from './PostPreview'

export default ({ limit }) => {
  const data = limit ? useStaticQuery(
    graphql`
      query HomeBlogPostsQuery {
        posts: allSanityPost(
          limit: 3
          sort: { fields: [publishedAt], order: DESC }
        ) {
          edges {
            node {
              id
              title
              brief
              mainImage {
                asset {
                  _id
                }
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
        }
      }
    `
  ) :
  useStaticQuery(
    graphql`
      query BlogPostsQuery {
        posts: allSanityPost(
          limit: 12
          sort: { fields: [publishedAt], order: DESC }
        ) {
          edges {
            node {
              id
              title
              brief
              mainImage {
                asset {
                  _id
                }
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
        }
      }
    `
  )

  const posts = data && data.posts.edges

  return (
    <>
      {posts.map(post => (
        <PostPreview key={post.node.id} post={post} />
      ))}
    </>
  )
}
