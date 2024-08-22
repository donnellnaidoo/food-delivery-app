// FormContext.js
import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    user: { name: '', email: '', phone: '' },
    address: { address: '', city: '', state: '', zipCode: '' },
    payment: { cardNumber: '', expDate: '', cvv: '' },
  });

  const updateFormData = (section, data) => {
    setFormData(prevState => ({
      ...prevState,
      [section]: { ...prevState[section], ...data }
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
