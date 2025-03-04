import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import TravelNotesContext from "../context/TravelNotes";

import WorldMap from '../components/WorldMap';
import Accordion from '../components/Accordion';

function CountryPage() {
  const { activeCountry, categoryList } = useContext(TravelNotesContext);

  const [countryStats, setCountryStats] = useState();

  // Next Steps:  
  // Query the database and grab all travel notes related to each accordion title so I can add it to the accordion content (children)

  const renderedCategoryList = categoryList.map((category, index) => {
    return <Accordion title={category.category_name} key={index} className="my-3">Content Here</Accordion>
  });

  console.log(categoryList);

  const fetchCountryStatistics = async () => {
    const res = await axios.get(`https://restcountries.com/v3.1/alpha/${activeCountry}`);

    setCountryStats(res.data[0]); 
  }

  useEffect(() => {
    fetchCountryStatistics();
  }, [activeCountry]);

  console.log(countryStats);

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="map-wrap">
        <WorldMap activeCountry={activeCountry} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col category-list-wrap">
            {renderedCategoryList}
        </div>
        <div className="flex flex-col country-stats-wrap">
          <p><img className="w-20" src={countryStats?.flags.png} alt="Country flag" /></p>
          <p>Name: {countryStats?.name.common}</p>
          <p>Population: {countryStats?.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
          <p>Capital: {countryStats?.capital.map(capital => capital)}</p>
          <p>Latitude: {countryStats?.latlng[0]}</p>
          <p>Longitude: {countryStats?.latlng[1]}</p>
        </div>
      </div>

    </div>
  )
}

export default CountryPage;