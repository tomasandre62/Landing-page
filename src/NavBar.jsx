import React from 'react'
import Links from './Menu'

export const NavBar = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark col-12 px-5">
        <div class="container-fluid">
        <a class="navbar-brand col-8" href="#">Start Bootstrap</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse col-4 justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
            {Links.map((link, i) => (    
            <li className="nav-item" key={i}>
                    <a className="nav-link active" aria-current="page" href={link.url}>{link.nombre}</a>
                </li>
            ))}
            </ul>
        </div>
        </div>
    </nav>
  </>
  )
}
