import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CardPizza = ({ id, name, price, ingredients, img, desc }) => {
  const { addToCart } = useContext(CartContext);
  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  const pizzaData = { id, name, price, ingredients, img, desc };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">Pizza {name}</h5>
        <div className="card-text">
          <p className="text-muted mb-2">Ingredientes:</p>
          <ul className="mb-3">
            {ingredients.map((ingredient, index) => (
              <li key={index}>🍕 {ingredient}</li>
            ))}
          </ul>
        </div>
        <p className="card-text"><strong>Precio: ${formatPrice(price)}</strong></p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-dark">Ver Más 👀</button>
          <button className="btn btn-dark" onClick={() => addToCart(pizzaData)}>
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza