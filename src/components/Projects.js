import React from "react";
import Thumbnail from "./Thumbnail.js";
import fbpreview from "../assets/fakebook-preview.png";
import taskiepreview from "../assets/taskie-preview.png";
import burenta from "../assets/burenta-preview.png";

export default function Projects(props) {
  return (
    <div>
      <h2>Take a look at my projects.</h2>
      <div className="projects-container flex items-center flex-col my-5 md:flex-row md:items-center">
        <Thumbnail
          title="Fakebook"
          description="A Facebook clone made using Ruby on Rails, uses PostgreSQL. Styled with Bulma."
          previewImage={fbpreview}
          demoLink="https://fakebook-odin.herokuapp.com/"
          codeLink="https://github.com/isakK96/fakebook"
        />

        <Thumbnail
          title="Taskie"
          description="A simple todo-list made with React utilizing hooks. Styled with TailwindCSS."
          previewImage={taskiepreview}
          demoLink="https://isakk96.github.io/taskie/"
          codeLink="https://github.com/isakK96/taskie"
        />

        <Thumbnail
          title="E-commerce front-end"
          description="A front-end page I built for a client as part of a freelance commission. Made with React and TailwindCSS."
          previewImage={burenta}
          demoLink="https://sample-ecommerce-example.netlify.app"
          codeLink="https://github.com/isakK96/sample-ecommerce"
        />
      </div>
    </div>
  );
}
