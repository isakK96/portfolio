import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Links() {
  return (
    <div className="links-container text-4xl flex align-center justify-center space-x-10 my-10 pb-5">
      <a className="text-gray-100 p-2 hover:bg-black hover:text-white rounded-full" href="https://www.linkedin.com/in/isak-koski-60461b1b9/"><FaLinkedin /></a>
      <a className="text-gray-100 p-2 hover:bg-black hover:text-white rounded-full" href="https://github.com/isakK96"><FaGithub /></a>
    </div>
  )
}