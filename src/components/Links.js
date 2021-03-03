import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Links() {
  return (
    <div className="links-container text-4xl flex align-center justify-center space-x-10 my-10 pb-5">
      <a className="text-gray-100 p-2 hover:bg-bluegray-200 hover:text-bluegray-700 rounded-full transition ease-linear duration-150" href="https://www.linkedin.com/in/isak-koski-60461b1b9/"><FaLinkedin /></a>
      <a className="text-gray-100 p-2 hover:bg-bluegray-200 hover:text-bluegray-700 rounded-full transition ease-linear duration-150" href="https://github.com/isakK96"><FaGithub /></a>
      <a className="text-gray-100 p-2 hover:bg-bluegray-200 hover:text-bluegray-700 rounded-full transition ease-linear duration-150" href="mailto:isak.koski96@gmail.com"><FaEnvelope /></a>
    </div>
  )
}