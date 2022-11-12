import React from 'react'
import img from '../assets/img1.png'

export const TopNav = () => {
  return (
    <div>
          <div id="navbar" class="nav-bar">
    <nav class="navbar navbar-expand-sm bg-none">
        <div class="container">
          <a class="navbar-brand" href="#">
          <img src={img} alt="logo" width="70px"/>
        </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#skills">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#about-me">About me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#contact">Contact</a>
              </li>  
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </div>
  )
}
