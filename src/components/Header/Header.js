import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <Link to='/' className='header__link'>
        <h1>Crypto View</h1>
      </Link>
    </div>
  );
}

export default Header;
