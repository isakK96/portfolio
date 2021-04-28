import React from "react";

export default function Thumbnail(props) {
  return (
    <div className="w-10/12 md:w-4/12 bg-white shadow hover:shadow-2xl transition-shadow m-5 flex-1">
      <img
        className="object-scale-down lg:h-96 mb-5 px-4 pt-4 mx-auto"
        src={props.previewImage}
        alt="Project preview"
      />
      <div className="bg-bluegray-700 pb-1">
        <div className="text-3xl font-bold pt-2 text-gray-100">
          {props.title}
        </div>
        <p className="text-left text-gray-300 mx-5 mb-5">{props.description}</p>
      </div>
      <div className="flex mt-5 justify-center">
        <div className="m-3">
          <a
            href={props.demoLink}
            className="w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-green-600 hover:border-green-700 hover:bg-green-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
          >
            <span className="mx-auto">Demo</span>
          </a>
        </div>
        <div className="m-3">
          <a
            href={props.codeLink}
            className="w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-indigo-500 hover:border-indigo-600 hover:bg-indigo-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
          >
            <span className="mx-auto">Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}
