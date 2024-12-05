import { useContext } from 'react';
import TravelNotesContext from "../context/TravelNotes";

import WorldMap from '../components/WorldMap';
import Accordion from '../components/Accordion';

function CountryPage() {
  const { activeCountry, categoryList } = useContext(TravelNotesContext);

  // Next Steps:  
  // 1. query the database and grab all travel notes related to each accordion title so I can add it to the accordion content (children)
  // 2. add country statistics api for useful country info

  const renderedCategoryList = categoryList.map((category, index) => {
    return <Accordion title={category.category_name} key={index} className="my-3">Content Here</Accordion>
  });

  console.log(categoryList);

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
          Country Statistics
        </div>
      </div>

    </div>
  )
}

export default CountryPage;