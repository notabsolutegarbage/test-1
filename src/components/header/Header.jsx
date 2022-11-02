import React from 'react'
import "./Header.css"
import logo from "../../img/logo.png"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/"><img className="header_icon" src={logo} alt="Logo"/><h2 className="ms-2 mb-2 title" style={{textDecoration: "none"}}>Lazyflix</h2></Link>
        {/* <Link><span>Hallo</span></Link> */}
          <div className="navbar-list">
            <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
            {/* <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link> */}
            <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            <Link to="/about" style={{textDecoration: "none"}}><span>About Us</span></Link>
            <Link to="/watchlist" style={{textDecoration: "none"}}><span>Watch List</span></Link>
            <Link to="/watched" style={{textDecoration: "none"}}><span>Watched</span></Link>
            <Link to="/contact" style={{textDecoration: "none"}}><span>Contact</span></Link>

          </div>
      </div>
    </div>
  )
}

export default Header