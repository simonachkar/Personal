import React from './node_modules/react'
import styled from './node_modules/styled-components'

import { colors, sizes } from '../utils/global'

const PostPreview = styled.div`
  margin: auto;
  margin-bottom: 2rem;
  @media (max-width: ${sizes.giant}) {
    width: 30%;
  }
  @media (max-width: ${sizes.large}) {
    width: 50%;
  }
  @media (max-width: ${sizes.medium}) {
    width: 80%;
  }
  @media (max-width: ${sizes.small}) {
    width: 90%;
  }
`

const Title = styled.h3`
  &:hover {
    cursor: pointer;
    color: ${colors.hover};
  }
  @media (max-width: ${sizes.giant}) {
    font-size: 1.5vmax;
    margin-bottom: 1.5rem;
  }
  @media (max-width: ${sizes.large}) {
    font-size: 2.5vmax;
    margin-bottom: 0.8rem;
  }
  @media (max-width: ${sizes.medium}) {
    font-size: 3.5vmax;
  }
`

const Tag = styled.span`
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  padding: 0.2rem 0.5rem;
  margin-right: 1rem;
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

const Description = styled.p`
  margin-top: 1rem;
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

const Button = styled.button`
  cursor: pointer;
  margin: 0.5rem 0;
  width: 100%;
  font-weight: 400;
  background-color: transparent;
  border: 0;
  border-radius: 5px;
  &:focus {
    outline: 0;
  }
  &:active {
    padding-right: 1px;
  }
  &:hover {
    background-color: ${colors.primary};
    color: white;
    animation-name: hover;
    animation-duration: 0.8s;
  }
  @keyframes hover {
    from {
      background-color: transparent;
    }
    to {
      background-color: ${colors.primary};
      color: white;
    }
  }
  small {
    font-weight: 300;
    margin-left: 0.1rem;
  }
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

export default ({ post }) => {
  const { title, brief, tags } = post.node
  return (
    <PostPreview>
      <Title>{title}</Title>
      {tags.map(tag => (
        <Tag bgColor={tag.bgColor.hex} textColor={tag.textColor.hex}>
          #{tag.name}
        </Tag>
      ))}
      <Description>{brief}</Description>
      <Button>
        Read Post <small>></small>
      </Button>
      <hr />
    </PostPreview>
  )
}
