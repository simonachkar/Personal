import React from 'react'
import { FaHashtag } from 'react-icons/fa'

export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: FaHashtag,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'bgColor',
      title: 'Background Color',
      type: 'color'
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'color'
    }
  ],
  preview: {
    select: {
      title: 'name',
      bgColor: 'bgColor.hex',
      textColor: 'textColor.hex'
    },
    prepare (selection) {
      const { title, bgColor, textColor } = selection
      return {
        title: title,
        media: <div style={{ backgroundColor: bgColor, color: textColor, fontSize: '400%', fontWeight: 600, padding: '100%' }}>#</div>
      }
    }
  }
}
