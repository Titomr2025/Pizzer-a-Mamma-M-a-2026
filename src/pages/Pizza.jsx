import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5002/api/pizzas/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener la pizza');
        return res.json();
      })
      .then((data) => setPizza(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Cargando pizza...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!pizza) return <div>No se encontró la pizza.</div>;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img 
            src={pizza.img} 
            alt={pizza.name}
            className="img-fluid rounded mb-3"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
          <h2>{pizza.name}</h2>
          <p>{pizza.desc}</p>
          <ul>
            {pizza.ingredients.map((ingredient, idx) => (
              <li key={idx}>🍕 {ingredient}</li>
            ))}
          </ul>
          <h4>Precio: ${pizza.price.toLocaleString()}</h4>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
