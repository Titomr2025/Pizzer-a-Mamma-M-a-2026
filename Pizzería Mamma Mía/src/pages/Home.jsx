import React from 'react';
import Header from '../Componentes/Header';
import CardPizza from '../Componentes/CardPizza';
import { pizzas } from '../Componentes/pizzas';

const Home = () => {
  return (
    <div className="main-content">
      <Header img="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" />
      <div className="container mt-4">
        <div className="row justify-content-center">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
              <CardPizza
                id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;