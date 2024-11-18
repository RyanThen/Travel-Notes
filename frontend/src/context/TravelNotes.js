import { useState, createContext, useContext } from "react";
import axios from 'axios';

import NavigationContext from "./Navigation";

const TravelNotesContext = createContext();

function TravelNotesProvider({ children }) {

  const { navigate } = useContext(NavigationContext)
  const [activeCountry, setActiveCountry] = useState(null);
  const [categoryList, setCategoryList] = useState([]);

  const handleCountryClick = (e) => {
    const countryCode = e.target.id;

    setActiveCountry(countryCode);

    navigate('/country-page');
  }

  const getCountryCategories = async () => {
    try {

      const res = await axios.get('http://localhost:3001/categories', {
        headers: { 'Content-Type': 'Access-Control-Allow-Origin' }
      });

      setCategoryList(res.data.rows);

    } catch (err) {
      console.error(err);
    }
  };

  const travelNotesContextProviderObject = {
    activeCountry,
    getCountryCategories,
    categoryList,
    handleCountryClick
  };

  return (
    <TravelNotesContext.Provider value={ travelNotesContextProviderObject }>
      {children}
    </TravelNotesContext.Provider>
  );
}

export { TravelNotesProvider };
export default TravelNotesContext;