import { createContext, useState } from "react";

const cartContext = createContext({
  cart: [],
  addItem: () => {},
  clearCart: () => {},
});

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addItem(product, count) {
    const newCart = [...cart];
    product.count = count || 1;
    newCart.push(product);
    setCart(newCart);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <cartContext.Provider value={{ cart: cart, addItem: addItem, clearCart: clearCart }}>
      {props.children}
    </cartContext.Provider>
  );
}

export { CartContextProvider };
export default cartContext;
