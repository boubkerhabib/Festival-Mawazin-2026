import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ links, currentPath }) {
  return (
    <nav>
      <div className="nav-inner">
        <div className="brand">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            BEAT<span>.</span>
          </Link>
        </div>
        <div className="nav-links">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${currentPath === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;