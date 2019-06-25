import React, { useState } from 'react'
import styled from 'styled-components'
import ReCAPTCHA from 'react-google-recaptcha'
import ReactLoading from 'react-loading'
import { colors, sizes } from '../utils/global'
import { Error, TextRes } from './Shared'

const margin = '3%'
const marginOnFocus = '1%'

const Form = styled.form`
  display: flex;
  font-weight: 500;
  flex-direction: column;
  margin: 2rem 2% 3rem 2%;
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

  @media (max-width: ${sizes.medium}) {
    margin: 1rem 2rem;
  }
`

export default () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [recaptcha, setRecaptcha] = useState(false)
  const [error, setError] = useState('')
  const [res, setRes] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = e => {
    e.preventDefault()

    let re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (!re.exec(email)) {
      setError('Please enter a valid email')
    } else if (!name || !email || !message || !recaptcha) {
      if (!name) {
        setError('Please enter your name')
      } else if (!email) {
        setError('Please enter your email')
      } else if (!recaptcha) {
        setError("Please prove you're not a robot! 🤖")
      } else if (!message) {
        setError('Please enter your message')
      }
    } else {
      setError('')
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setRes('Thank you! Your message has been sent successfully.')
      }, 3000)
    }
  }

  console.log(name, email, message)
  return (
    <Form>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextArea
        rows="5"
        name="message"
        placeholder="Your Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />

      <div
        style={{ margin: 'auto', marginTop: '1.5rem', marginBottom: '1rem' }}
      >
        <ReCAPTCHA
          sitekey={process.env.GATSBY_RECAPTCHA_KEY}
          onChange={() => setRecaptcha(!recaptcha)}
        />
      </div>

      {loading ? (
        <div style={{ margin: 'auto' }}>
          <ReactLoading type="cubes" color={colors.primary} />
        </div>
      ) : (
        undefined
      )}

      {error ? <Error>{error}</Error> : undefined}
      {res ? <TextRes>{res}</TextRes> : undefined}

      <Button onClick={submit}>Send</Button>
    </Form>
  )
}
