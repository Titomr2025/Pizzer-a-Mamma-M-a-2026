import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { getTotal } = useContext(CartContext);
  const total = getTotal();
  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="d-flex align-items-center flex-grow-1">
          <Link to="/" className="navbar-brand mb-0 h1 me-2 text-decoration-none">
            <span className="d-none d-md-inline">Pizzería Mamma Mía!</span>
            <span className="d-md-none">🍕 Mamma Mía!</span>
          </Link>
          <Link to="/" className="btn btn-outline-light btn-sm me-1 text-decoration-none">
            <span className="d-none d-sm-inline">🍕 Home</span>
            <span className="d-sm-none">🍕</span>
          </Link>
          <Link to="/profile" className="btn btn-outline-light btn-sm me-1 text-decoration-none">
            <span className="d-none d-sm-inline">🔓 Profile</span>
            <span className="d-sm-none">🔓</span>
          </Link>
          <Link to="/login" className="btn btn-outline-light btn-sm me-1 text-decoration-none">
            <span className="d-none d-sm-inline">🔐 Login</span>
            <span className="d-sm-none">🔐</span>
          </Link>
          <Link to="/register" className="btn btn-outline-light btn-sm me-1 text-decoration-none">
            <span className="d-none d-sm-inline">🔐 Register</span>
            <span className="d-sm-none">🔐</span>
          </Link>
        </div>
        <Link to="/cart" className="btn btn-outline-info btn-sm text-decoration-none">
          <span className="d-none d-sm-inline">🛒 Total: ${formatPrice(total)}</span>
          <span className="d-sm-none">🛒 ${formatPrice(total)}</span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
