import { useState, createContext, useContext } from "react";
import axios from 'axios';

import NavigationContext from "./Navigation";

const TravelNotesContext = createContext();

function TravelNotesProvider({ children }) {

  const { navigate } = useContext(NavigationContext)

  const [activeCountry, setActiveCountry] = useState(null);
  const [categoryList, setCategoryList] = useState([]);

  const [loginFormData, setLoginFormData] = useState({ username: '', password: '' });
  const [currentUser, setCurrentUser] = useState(null);
  const [loginMessage, setLoginMessage] = useState('');

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

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post('http://localhost:3001/login', { loginFormData });
      console.log(res);

      setCurrentUser(res.data.rows[0].username);
        
    } catch (err) {
      setCurrentUser(null);

      setLoginMessage('User not found, please try again');

      console.error(err);
    }
  }

  const travelNotesContextProviderObject = {
    activeCountry,
    getCountryCategories,
    categoryList,
    handleCountryClick,
    handleLoginSubmit,
    loginFormData,
    setLoginFormData,
    loginMessage,
    currentUser
  };

  return (
    <TravelNotesContext.Provider value={ travelNotesContextProviderObject }>
      {children}
    </TravelNotesContext.Provider>
  );
}

export { TravelNotesProvider };
export default TravelNotesContext;