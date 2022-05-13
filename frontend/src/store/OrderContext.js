import React, { useState } from 'react';
import { createContext } from 'react';

export const OrderContext = createContext();
const OrderProvider = ({ children }) => {
  const [listProduct, setListProduct] = useState([]);
  return (
    <OrderContext.Provider value={[listProduct, setListProduct]}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
