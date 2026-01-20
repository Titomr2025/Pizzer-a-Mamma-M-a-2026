import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container py-5 text-center">
      <h1 style={{ fontSize: '7rem', color: '#e74c3c' }}>404</h1>
      <h2 style={{ color: '#333' }}>¡Ups! Página no disponible</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Parece que te perdiste entre las pizzas...<br/>
        Pero siempre puedes volver al inicio y pedir una deliciosa pizza 🍕
      </p>
      <Link to="/" className="btn btn-primary btn-lg mt-3">
        Volver al inicio
      </Link>
      <div style={{ marginTop: '2rem', fontSize: '3rem' }}>🍕🍕🍕</div>
    </div>
  )
}

export default NotFound
