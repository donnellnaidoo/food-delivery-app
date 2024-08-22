import { View, Text } from 'react-native'
import React, { createContext } from 'react'

const CartContext = createContext({
    cartItems: [],
    setCartItems: () => {},
  });

export default CartContext;