import React from 'react'
import Heading from './Heading'

export default function Card({title, description, children}) {
  return (
    <div>
        <Heading text={title} /> {/* using text from Heading.jsx */}
        <p>{description}</p>
        {children}
    </div>
  )
}
