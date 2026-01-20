import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existe = prevCart.find((p) => p.id === pizza.id);
      if (existe) {
        return prevCart.map((p) =>
          p.id === pizza.id ? { ...p, count: p.count + 1 } : p
        );
      } else {
        return [...prevCart, { ...pizza, count: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((p) => p.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((p) =>
        p.id === id ? { ...p, count: p.count + 1 } : p
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((p) =>
          p.id === id ? { ...p, count: p.count - 1 } : p
        )
        .filter((p) => p.count > 0)
    );
  };

  const getTotal = () => {
    return cart.reduce((total, p) => total + p.price * p.count, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
