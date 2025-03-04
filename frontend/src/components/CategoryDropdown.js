import { useContext } from 'react';

import TravelNotesContext from "../context/TravelNotes";

function CategoryDropdown({ ...rest }) {
  const { categoryList } = useContext(TravelNotesContext);

  const renderedCategoryList = categoryList.map((category, index) => {
    return (
      <option key={index}>
        {category.category_name}
      </option>
    )
  });
  
  return (
    <div className="categroy-dropdown-wrap">

      <select { ...rest } className="w-full py-2 outline rounded" name="category-list" id="categroy-list">
        {renderedCategoryList}
      </select>

    </div>
    
  )
}

export default CategoryDropdown;