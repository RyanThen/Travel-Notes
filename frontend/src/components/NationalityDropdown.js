import { useState, useEffect } from "react";
import axios from 'axios';

function NationalityDropdown({ ...rest }) {
  const [countryList, setCountryList] = useState([]);

  const getCountryList = async () => {
    const res = await axios.get('http://localhost:3001/countries', {
      headers: { 'Content-Type': 'Access-Control-Allow-Origin' }
    });

    setCountryList(res.data.rows);
  };

  useEffect(() => {
    getCountryList();
  }, []);
  
  const renderedCountryList = countryList.map((country, index) => {
    return (
      <option key={index}>
        {country.country_name}
      </option>
    )
  });

  return (
    <div className="nationality-dropdown-wrap">

      <select {...rest} className="w-full py-2 outline rounded">
        {renderedCountryList}
      </select>

    </div>
  );
}

export default NationalityDropdown;
