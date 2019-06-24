import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Img from 'gatsby-image'

import { colors, sizes } from '../utils/global'

const margin = '3%'
const marginOnFocus = '1%'

const Form = styled.form`
  display: flex;
  font-weight: 500;
  flex-direction: column;
  margin: 2rem 20% 3rem 20%;
  text-transform: uppercase;
`

const Input = styled.input`
  outline: 0;
  border: 1px #eee solid;
  border-radius: 2rem;
  padding: 1rem;
  margin-left: ${margin};
  margin-right: ${margin};
  margin-bottom: 0.5rem;
  &:focus {
    margin-left: ${marginOnFocus};
    margin-right: ${marginOnFocus};
    animation: strech 0.8s;
    @keyframes strech {
      from {
        margin-left: ${margin};
        margin-right: ${margin};
      }
      to {
        margin-left: ${marginOnFocus};
        margin-right: ${marginOnFocus};
      }
    }
  }
`

const TextArea = styled.textarea`
  outline: 0;
  border: 1px #eee solid;
  border-radius: 1rem;
  padding: 1rem;
  margin-left: ${margin};
  margin-right: ${margin};
  margin-bottom: 0.5rem;
  &:focus {
    margin-left: ${marginOnFocus};
    margin-right: ${marginOnFocus};
    animation: strech 0.8s;
    @keyframes strech {
      from {
        margin-left: ${margin};
        margin-right: ${margin};
      }
      to {
        margin-left: ${marginOnFocus};
        margin-right: ${marginOnFocus};
      }
    }
  }
`

const Button = styled.button`
  background-color: ${colors.primary};
  cursor: pointer;
  outline: 0;
  text-transform: uppercase;
  color: white;
  border: none;
  border-radius: 2rem;
  margin: 1rem 15rem;
  animation: hoverOut 0.5s;
  padding: 0.5rem;

  &:hover {
    margin: 1rem 14rem;
    animation: hoverIn 0.5s;
  }

  @keyframes hoverOut {
    from {
      margin: 1rem 14rem;
    }
    to {
      margin: 1rem 15rem;
    }
  }

  @keyframes hoverIn {
    from {
      margin: 1rem 15rem;
    }
    to {
      margin: 1rem 14rem;
    }
  }
`

export default () => {
  return (
    <Form>
      <Input type="text" name="name" placeholder="Full Name"></Input>
      <Input type="text" name="email" placeholder="E-mail"></Input>
      <Input type="text" name="subject" placeholder="Phone"></Input>
      <TextArea rows="5" name="message" placeholder="Your Message"></TextArea>
      <Button>Send</Button>
    </Form>
  )
}
