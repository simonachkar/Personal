import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import PostPreview from './PostPreview'

const PostList = styled.div`
  margin: 2vmax 0;
`

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        posts: allSanityPost(
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
    <PostList>
      {posts.map(post => (
        <PostPreview key={post.node.id} post={post} />
      ))}
    </PostList>
  )
}
