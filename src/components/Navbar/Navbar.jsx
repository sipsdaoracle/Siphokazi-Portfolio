// Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

const Navbar = () => {

  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/About" className={`nav-link ${location.pathname === '/' ? 'active' : ''} nav-item`}>
          <PersonOutlineOutlinedIcon className="nav-icon home" />
          <p>About</p>
        </Link>

        <Link to="/resume" className={`nav-link ${location.pathname === '/' ? 'active' : ''} nav-item`}>
          <InsertDriveFileOutlinedIcon className="nav-icon home" />
          <p>Resume</p>
        </Link>

       

        <Link to="/portfolio" className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''} nav-item`}>
          <DashboardOutlinedIcon className="nav-icon portfolio" />
          <p>Portfolio</p>
        </Link>

        <Link to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'active' : ''} nav-item`}>
          <ImportContactsRoundedIcon className="nav-icon blog" />
          <p>Blog</p>
        </Link>

        <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''} nav-item`}>
          <ContactMailOutlinedIcon className="nav-icon contact" />
          <p>Contact</p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
