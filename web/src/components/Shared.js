import styled from 'styled-components'
import { colors, sizes } from '../utils/global'

export const Line = styled.hr`
  background-color: ${colors.primary};
  width: 5%;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.3rem;
  @media (max-width: ${sizes.small}) {
    width: 10%;
  }
`

export const Title = styled.h2`
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 4rem;
  &:before {
    content: ' ';
    background-color: ${colors.primary};
    margin-top: -1rem;
    margin-left: -1rem;
    padding: 2rem;
    border-radius: 50%;
    position: absolute;
    width: 3rem;
    height: 3rem;
    z-index: -1;
  }
  @media (max-width: ${sizes.giant}) {
    font-size: 1.5vmax;
  }
  @media (max-width: ${sizes.large}) {
    margin-top: 3rem;
    font-size: 2.5vmax;
  }
  @media (max-width: ${sizes.medium}) {
    font-size: 3.5vmax;
  }
`

export const Subtitle = styled.h3`
  text-align: center;
  margin: 2.5rem;
  small {
    font-weight: 300;
    margin-left: 0.1rem;
  }
  ${props =>
    props.clickable
      ? `
        &:hover {
        cursor: pointer;
        color: ${colors.hover};
        }
    `
      : `undefined`};
`

export const PageTitle = styled.h1`
  font-weight: 900;
  font-size: 5vmax;
  margin: 1rem 10%;
  margin-bottom: 3rem;
  @media (max-width: ${sizes.medium}) {
    margin: 3rem 5%;
    font-size: 8vmax;
  }
  &:before {
    content: ' ';
    height: 0.6rem;
    width: 4rem;
    background-color: ${colors.primary};
    position: absolute;
    margin-top: 4.5rem;
    @media (max-width: ${sizes.medium}) {
      margin-top: 3.8rem;
    }
  }
`
export const PostTitle = styled.h1`
  font-size: 4vmax;
  margin: 1rem 10%;
  @media (max-width: ${sizes.medium}) {
    font-size: 3vmax;
  }
`
