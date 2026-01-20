import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getTotal } = useContext(CartContext);
  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  return (
    <div className="container mt-5 pt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="mb-4">Detalles del pedido:</h2>
          {cart.length === 0 && <p>No hay productos en el carrito.</p>}
          {cart.map((pizza) => (
            <div key={pizza.id} className="row align-items-center mb-3 p-3 border-bottom">
              <div className="col-2">
                <img 
                  src={pizza.img} 
                  alt={pizza.name} 
                  className="img-fluid rounded"
                  style={{ width: '80px', height: '60px', objectFit: 'cover' }}
                />
              </div>
              <div className="col-4">
                <h5 className="mb-0 text-capitalize">{pizza.name}</h5>
              </div>
              <div className="col-2 text-end">
                <strong>${formatPrice(pizza.price)}</strong>
              </div>
              <div className="col-4">
                <div className="d-flex align-items-center justify-content-end">
                  <button 
                    className="btn btn-outline-danger btn-sm me-2"
                    onClick={() => decreaseQuantity(pizza.id)}
                  >
                    -
                  </button>
                  <span className="mx-2">{pizza.count}</span>
                  <button 
                    className="btn btn-outline-primary btn-sm ms-2"
                    onClick={() => increaseQuantity(pizza.id)}
                  >
                    +
                  </button>
                  <button 
                    className="btn btn-outline-secondary btn-sm ms-2"
                    onClick={() => removeFromCart(pizza.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <h3>Total: ${formatPrice(getTotal())}</h3>
          </div>
          <div className="mt-4">
            <button className="btn btn-dark btn-lg">Pagar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
