import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">

          <Link className="navbar-brand" to="/">
            Pet Boarding App
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">

              <Link className="nav-link" to="/">
                Add Pet
              </Link>

              <Link className="nav-link" to="/view">
                View All Pets
              </Link>

            </div>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default NavigationBar