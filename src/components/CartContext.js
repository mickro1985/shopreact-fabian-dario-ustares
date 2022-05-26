import { useState, createContext } from "react";

const CartContext = createContext({
  ProductosCarro: [],
});

export const CartContextProvider = ({ children }) => {
  const [productosLista, setProductosLista] = useState([]);

  const addItem = (Product) => {
    const repetido = productosLista.findIndex(
      (producto) => producto.id === Product.id
    );
    if (repetido !== -1) {
      setProductosLista(
        productosLista.map((prod) =>
          prod.id === Product.id
            ? { ...prod, cantidad: prod.cantidad + Product.cantidad }
            : prod
        )
      );
    } else {
      setProductosLista([Product, ...productosLista]);
    }
  };

  const removeItem = (id) => {
    setProductosLista(productosLista.find((i) => i.id !== id));
  };

  const clear = () => {
    setProductosLista([]);
  };

  const isInCart = (id) => {};

  return (
    <CartContext.Provider
      value={{
        ProductosCarro: productosLista,
        addItem,
        removeItem,
        clear,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
