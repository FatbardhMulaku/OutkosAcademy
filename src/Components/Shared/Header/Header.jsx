import React from 'react'
import './Header.scss'
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'
import StyledLink from '../StyledLink/StyledLink'

const Header = () => {
    return (
      <header className="header">
          <Logo/>
          <Navbar/>
          <div className="auth-links">
              <StyledLink to="/login" styles="sm text-primary">Login</StyledLink>
              <StyledLink to="/signup" styles="sm bg-primary">Register</StyledLink>
          </div>
      </header>
    )
}

export default Header
