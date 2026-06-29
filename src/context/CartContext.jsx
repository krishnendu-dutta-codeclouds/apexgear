import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('esports_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      console.error('Failed to load cart from localStorage', e);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('esports_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  const addToCart = (product, quantity = 1, customization = null) => {
    setCart((prevCart) => {
      // Find if item with same ID and same customization already exists
      const existingItemIndex = prevCart.findIndex(
        (item) =>
          item.id === product.id &&
          JSON.stringify(item.customization) === JSON.stringify(customization)
      );

      if (existingItemIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      }

      return [...prevCart, { ...product, quantity, customization }];
    });
    setIsCartOpen(true); // Auto-open cart drawer on add
  };

  const removeFromCart = (id, customization = null) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(item.id === id && JSON.stringify(item.customization) === JSON.stringify(customization))
      )
    );
  };

  const updateQuantity = (id, quantity, customization = null) => {
    if (quantity <= 0) {
      removeFromCart(id, customization);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && JSON.stringify(item.customization) === JSON.stringify(customization)
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
