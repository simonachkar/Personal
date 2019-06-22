import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import clientConfig from '../../client-config'
import Figure from './Figure'

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return <h1>{props.children}</h1>

        case 'h2':
          return <h2>{props.children}</h2>

        case 'h3':
          return <h3>{props.children}</h3>

        case 'h4':
          return <h4>{props.children}</h4>

        case 'blockquote':
          return <blockquote>{props.children}</blockquote>

        default:
          return <p>{props.children}</p>
      }
    },
    image(props) {
      return <Figure img={props} />
    },
    code(props) {
      return <SyntaxHighlighter language={props.node.language} style={dracula}>{props.node.code}</SyntaxHighlighter>
    },
  },
}

const BlockContent = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
)

export default BlockContent
