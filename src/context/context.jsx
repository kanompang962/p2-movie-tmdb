import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import { getStorage } from "../services/service";

const initeState = {
  cart: [],
  total: 0,
  amount: 0,
};

const CartContext = createContext();

export const MyCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initeState);

  useEffect(() => {
    if (getStorage()) state.cart = getStorage();
  }, []);

  useEffect(() => {
    dispatch({ type: "TOTAL" });
  }, [state.cart]);

  // เพิ่มสินค้า
  const addQuantity = (item) => {
    dispatch({ type: "ADD_QUANTITY", payload: item });
  };
  // เคลียร์สินค้า
  const removeQuantity = (item) => {
    dispatch({ type: "REMOVE_QUANTITY"});
  };

  return (
    <CartContext.Provider value={{ ...state, addQuantity, removeQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
