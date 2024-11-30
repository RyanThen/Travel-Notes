import { useState } from "react";
import axios from 'axios';

function NationalityDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [countryList, setCountryList] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const getCountryList = async () => {
    const res = await axios.get('http://localhost:3001/countries', {
      headers: { 'Content-Type': 'Access-Control-Allow-Origin' }
    });

    setCountryList(res.data.rows);
  };

  getCountryList();
  
  const renderedCountryList = countryList.map((country) => {
    return <li>
              <a
                href="#1"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {country.country_name}
              </a>
            </li>
  });

  return (
    <div className="relative inline-block">
      {/* Dropdown Button */}
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="outline focus:ring-3 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Dropdown button
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          id="dropdown"
          className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            
            {renderedCountryList}

          </ul>
        </div>
      )}
    </div>
  );
}

export default NationalityDropdown;
