import { useState } from 'react';
import classNames from 'classnames';

// Do I need to add an AccordionPage component that brings in a data set (from the database)?  I would then loop through the data to create accordions?  Is this better handled to set up the loop individually on whichever page I need the accordions in order to make the accordion component more flexible?

function Accordion({ title, children, ...rest }) {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  const handleAccordionClick = () => {
    setIsOpen(!isOpen);
  }

  const accordionClasses = classNames(rest.className, 'border px-2 py-3');

  return (
    <div className={accordionClasses}>
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