import React from 'react'
import logo from '../../public/Bigger_bowl_logo.png'

const Header = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <p className='col-lg-5 col-md-2 col-sm-2'></p>
        <h1
          className='align-self-center col-lg-4 col-md-6 col-sm-6'
          id='header-title'
        >
          Feel better shopping at Bigger Bowl
        </h1>
        <p className='col-lg-2 col-md-2 col-sm-2'></p>
      </div>
      <nav className='row navbar navbar-expand-lg navbar-light bg-light'>
        <img
          src={logo}
          alt='logo'
          className='img-fluid  float-left img-thumbnail'
          id='bb-logo'
        />
        <a className='navbar-brand col-lg-2 col-md-2 col-xl-2' href='#'>
          Bigger Bowl
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a className='nav-link' id='bb-nav-title' href='#'>
                Shopping
                <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' id='bb-nav-title' href='#'>
                Estimations
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' id='bb-nav-title' href='#'>
                About us
              </a>
            </li>
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button
              className='btn btn-outline-success my-2 my-sm-0'
              type='submit'
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  )
}
export default Header
