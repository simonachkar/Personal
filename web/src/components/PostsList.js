import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PostPreview from './PostPreview'

export default ({ limit }) => {
  const data =  useStaticQuery(
    graphql`
      query {
        posts: allSanityPost(
          limit: 4
          sort: { fields: [publishedAt], order: DESC }
        ) {
          edges {
            node {
              id
              title
              brief
              slug {
                current
              }
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
