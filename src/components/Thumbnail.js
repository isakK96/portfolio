import React from 'react'

export default function Thumbnail(props) {
  return (
    <>
      <img className="" src={props.previewImage} alt="Project preview"/>
      <div className="text-3xl font-bold">{props.title}</div>
      <p className="text-left">{props.description}</p>
      <div className="inline-flex">
        <a href={props.demoLink} className="bg-gray-300 hover:bg-gray-400 p-3 rounded-l-md border-r-2">Live demo</a>
        <a href={props.codeLink} className="bg-gray-300 hover:bg-gray-400 p-3 rounded-r-md">View code</a>
      </div>
    </>

  )
}