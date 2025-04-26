import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/netflix-logo.png";
import search_icon from "../../assets/search-icon.svg";
import bell_icon from "../../assets/bell-icon.svg";
import profile_img from "../../assets/avatar1.png";
import caret_icon from "../../assets/caret.svg";
import { logOut } from "../../firebase";

const Navbar = () => {
  const navRef = useRef()

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }
      else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[navRef])
  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New and Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="search_icon" className="icons" />
        <p>Maverick</p>
        <img src={bell_icon} alt="bell_icon" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} className="profile" />
          <img src={caret_icon} className="icons" />
          <div className="dropdown">
            <p onClick={logOut}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
