import React from 'react'

const Header = (props) => {
  return (
    <header>
      <img src={props.img} />
      <div className="header-content">
        <h1>Pizzería Mamma Mía</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </header>
  );
};

export default Header;