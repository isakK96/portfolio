import React from 'react'
import Thumbnail from './Thumbnail.js'

export default function Projects(props) {
  return (
    <div>
      <h2>Take a look at my projects.</h2>
      <div className="projects-container flex justify-center mt-5">
        <div className="w-10/12">
          <Thumbnail
            title="Fakebook"
            description="A Facebook clone made using Ruby on Rails. Styled with Bulma."
            imageLink=""
            demoLink=""
            codeLink=""
          />
        </div>
      </div>
    </div>
  )
}