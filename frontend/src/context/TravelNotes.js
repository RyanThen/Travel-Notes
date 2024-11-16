import { useState, createContext } from "react";
import axios from 'axios';

const TravelNotesContext = createContext();

function TravelNotesProvider({ children }) {

  const getCountryCategories = async () => {
    try {

      const res = await axios.get('http://localhost:3001/categories', {
        headers: { 'Content-Type': 'Access-Control-Allow-Origin' }
      });
      console.log(res);
  
    } catch (err) {
      console.error(err);
    }
  };

  const travelNotesContextProviderObject = {
    getCountryCategories
  };

  return (
    <TravelNotesContext.Provider value={ travelNotesContextProviderObject }>
      {children}
    </TravelNotesContext.Provider>
  );
}

export { TravelNotesProvider };
export default TravelNotesContext;