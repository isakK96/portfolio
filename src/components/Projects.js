import React from 'react'
import Thumbnail from './Thumbnail.js'
import fbpreview from '../fakebook-preview.png'
import taskiepreview from '../taskie-preview.png'

export default function Projects(props) {
  return (
    <div>
      <h2>Take a look at my projects.</h2>
      <div className="projects-container flex items-center flex-col my-5 md:flex-row md:items-center">
        <Thumbnail
          title="Fakebook"
          description="A Facebook clone made using Ruby on Rails. Styled with Bulma."
          previewImage={fbpreview}
          demoLink="https://fakebook-odin.herokuapp.com/"
          codeLink="https://github.com/isakK96/fakebook"
        />

        <Thumbnail
          title="Taskie"
          description="A simple todo-list made with React."
          previewImage={taskiepreview}
          demoLink="https://isakk96.github.io/taskie/"
          codeLink="https://github.com/isakK96/taskie"
        />
      </div>
    </div>
  )
}