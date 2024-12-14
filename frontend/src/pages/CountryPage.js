import { useContext } from 'react';
import axios from 'axios';

import TravelNotesContext from "../context/TravelNotes";

import WorldMap from '../components/WorldMap';
import Accordion from '../components/Accordion';

function CountryPage() {
  const { activeCountry, categoryList } = useContext(TravelNotesContext);

  // Next Steps:  
  // 1. add country statistics api for useful country info
  // 2. query the database and grab all travel notes related to each accordion title so I can add it to the accordion content (children)

  const renderedCategoryList = categoryList.map((category, index) => {
    return <Accordion title={category.category_name} key={index} className="my-3">Content Here</Accordion>
  });

  console.log(categoryList);

  // Add country statistics to JSX
  const fetchCountryStatistics = async () => {
    const res = await axios.get(`https://restcountries.com/v3.1/alpha/${activeCountry}`);

    console.log(res.data[0].name.common, res);
  }

  fetchCountryStatistics();

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
          <p>Name: </p>
        </div>
      </div>

    </div>
  )
}

export default CountryPage;