import React, { useEffect, useState } from 'react';
import Header from '../Componentes/Header';
import CardPizza from '../Componentes/CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5002/api/pizzas')
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener las pizzas');
        return res.json();
      })
      .then((data) => setPizzas(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Cargando pizzas...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="main-content">
      <Header img="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"></Header>
      <div className="pizza-cards-container">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc={pizza.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;