import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Links() {
  return (
    <div className="links-container text-4xl flex align-center justify-center space-x-10 my-10">
      <a className="p-2 hover:bg-black hover:text-white rounded-full" href=""><FaLinkedin /></a>
      <a className="p-2 hover:bg-black hover:text-white rounded-full" href="https://github.com/isakK96"><FaGithub /></a>
    </div>
  )
}