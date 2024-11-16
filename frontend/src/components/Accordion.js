import { useState } from 'react';

// ******* //
// It's time to start setting up the routes, Pages and database so I can start bringing in data
// ******* //

// Why does this work with multiple accordions even though the isOpen state is out of sync?
// Do I need to add an AccordionPage component that brings in a data set (from the database)?  I would then loop through the data to create accordions?  Is this better handled to set up the loop individually on whichever page I need the accordions in order to make the accordion component more flexible?
// I might need to set up the database first in order to keep going on this component so I need how the data is going to be structured.  This is especially important for the {children} prop.  Will the content in the database be structured with HTML so I can get the correct formatting for the accordion content?  Maybe look into NPM packages that convert text to HTML like the TinyMCE editor in WordPress?

function Accordion({ title, children}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordionClick = () => {
    setIsOpen(!isOpen);
  }

  console.log(isOpen);

  return (
    <div className="border px-2 py-3">
      <div onClick={handleAccordionClick} className="accordion__header-wrap pb-2">
        <h4 className="text-md cursor-pointer md:text-lg lg:text-xl">{title}</h4>
      </div>
      <div className={`accordion__content-wrap grid transition-all ${isOpen ? "accordion-open" : "accordion-close"}`}>
        <div className="overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Accordion;