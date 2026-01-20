import React from 'react';
import Header from '../Componentes/Header';
import CardPizza from '../Componentes/CardPizza';
import { pizzas } from '../Componentes/pizzas';

const Home = () => {
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