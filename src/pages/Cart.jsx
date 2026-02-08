import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  const userContext = useContext(UserContext);
  const token = userContext.token || localStorage.getItem('token');
  const [success, setSuccess] = useState(false);
  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  const handleCheckout = async () => {
    if (!token) {
      alert('Debes iniciar sesión para pagar');
      return;
    }
    try {
      const res = await fetch('http://localhost:5002/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error en el checkout');
      setSuccess(true);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container mt-5 pt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="mb-4">Detalles del pedido:</h2>
          {success && <div className="alert alert-success">¡Pago exitoso!</div>}
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
            {cart.length === 0 && (
              <div className="alert alert-info mt-2">
                Agrega productos al carrito para poder pagar.
              </div>
            )}
            {cart.length > 0 && !token && (
              <div className="alert alert-warning mt-2">
                Debes iniciar sesión para poder pagar.
              </div>
            )}
            {cart.length > 0 && token && (
              <button className="btn" style={{ backgroundColor: 'green', color: 'white' }} onClick={handleCheckout}>
                Pagar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
