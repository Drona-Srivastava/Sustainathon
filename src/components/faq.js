import '../faq.css'
import React, { useState } from 'react';

export default function FAQ(){
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs">
      <span><i>FAQ's</i></span>
      {['Question 1', 'Question 2', 'Question 3'].map((section, index) => (
        <div key={index}>
          <button 
            className={`accordion ${activeIndex === index ? 'active' : ''}`} 
            onClick={() => toggleAccordion(index)}
          >
            {section}
          </button>
          <div className="panel" 
            style={{ display: activeIndex === index ? 'block' : 'none' }}
          >
            <p>Lorem ipsum...</p>
          </div>
        </div>
      ))}
    </div>
  );
};


