import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  const { token } = useContext(UserContext);
  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div className="container mt-5 pt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="mb-4">Detalles del pedido:</h2>
          {cart.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            cart.map((pizza) => (
              <div key={pizza.id} className="row align-items-center mb-3 p-3 border-bottom">
                <div className="col-2">
                  <img 
                    src={pizza.img} 
                    alt={pizza.name} 
                    className="img-fluid rounded"
                    style={{ width: '80px', height: '60px', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-3">
                  <h5 className="mb-0">{pizza.name}</h5>
                </div>
                <div className="col-2">
                  <span className="badge bg-secondary">x{pizza.count}</span>
                </div>
                <div className="col-2">
                  <button className="btn btn-sm btn-outline-dark me-1" onClick={() => decreaseQuantity(pizza.id)}>-</button>
                  <button className="btn btn-sm btn-outline-dark" onClick={() => increaseQuantity(pizza.id)}>+</button>
                </div>
                <div className="col-2">
                  <strong>${formatPrice(pizza.price * pizza.count)}</strong>
                </div>
                <div className="col-1">
                  <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(pizza.id)}>Eliminar</button>
                </div>
              </div>
            ))
          )}
          <div className="mt-4 text-end">
            <h4>Total: ${formatPrice(total)}</h4>
            <button className="btn btn-success mt-2" disabled={!token}>Pagar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
