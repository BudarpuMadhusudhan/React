import React from 'react'
import {NavLink,Link } from "react-router-dom";

export default function navBar2() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Circket</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/bussiness">Business</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/political">political</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
