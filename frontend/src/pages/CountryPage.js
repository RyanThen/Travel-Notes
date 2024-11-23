import { useContext } from 'react';
import TravelNotesContext from "../context/TravelNotes";

import WorldMap from '../components/WorldMap';
import Accordion from '../components/Accordion';

function CountryPage() {
  const { activeCountry, categoryList } = useContext(TravelNotesContext);

  const renderedCategoryList = categoryList.map((category, index) => {
    return <Accordion title={category.category_name} className="my-3">Content Here</Accordion>
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