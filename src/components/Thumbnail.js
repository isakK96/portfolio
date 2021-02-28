import React from 'react'

export default function Thumbnail(props) {
  return (
    <div className="w-10/12 lg:w-3/12 bg-white shadow hover:shadow-2xl transition-shadow">
      <img className="object-scale-down mb-5 px-4 pt-4" src={props.previewImage} alt="Project preview"/>
      <div className="bg-bluegray-600 p-0">
        <div className="text-3xl font-bold pt-2 text-gray-100">{props.title}</div>
        <p className="text-left text-gray-300 mx-5 mb-5">{props.description}</p>
        <div className="inline-flex">
          <a href={props.demoLink} className="bg-gray-200 hover:bg-gray-300 p-3 border-r-2">Live demo</a>
          <a href={props.codeLink} className="bg-gray-200 hover:bg-gray-300 p-3">View code</a>
        </div>
      </div>
    </div>

  )
}