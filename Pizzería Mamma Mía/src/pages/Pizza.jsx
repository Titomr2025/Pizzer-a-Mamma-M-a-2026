import React, { useState, useEffect } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas/p001')
      .then(response => response.json())
      .then(data => setPizza(data));
  }, []);

  if (!pizza) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h3>Cargando...</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img 
                src={pizza.img} 
                alt={pizza.name}
                className="img-fluid rounded shadow"
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-6">
              <div className="p-4">
                <h1 className="text-capitalize mb-3 fw-bold">{pizza.name}</h1>
                <p className="text-muted mb-4 lead">{pizza.desc}</p>
                <div className="mb-4">
                  <h5 className="mb-3">🍕 Ingredientes:</h5>
                  <ul className="list-unstyled">
                    {pizza.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-capitalize mb-2">
                        <span className="badge bg-light text-dark me-2">✓</span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-3">
                  <h3 className="text-success mb-0 fw-bold">
                    Precio: ${pizza.price.toLocaleString()}
                  </h3>
                  <button className="btn btn-primary btn-lg">
                    Añadir al carrito 🛒
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
