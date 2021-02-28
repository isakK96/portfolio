import React from 'react'
import Thumbnail from './Thumbnail.js'
import preview from '../fakebook-preview.png'

export default function Projects(props) {
  return (
    <div>
      <h2>Take a look at my projects.</h2>
      <div className="projects-container flex justify-center mt-5 mb-5">
        <Thumbnail
          title="Fakebook"
          description="A Facebook clone made using Ruby on Rails. Styled with Bulma."
          previewImage={preview}
          demoLink="https://fakebook-odin.herokuapp.com/"
          codeLink="https://github.com/isakK96/fakebook"
        />
      </div>
    </div>
  )
}