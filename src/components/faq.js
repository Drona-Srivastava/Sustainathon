import '../faq.css'
import React, { useState } from 'react';

export default function FAQ(){
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="questions">
      {['Section 1', 'Section 2', 'Section 3'].map((section, index) => (
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


// export default function FAQ(){
//     return(
//     <div className="questions">
//         <button className="accordion">Section 1</button>
//         <div className="panel">
//           <p>Lorem ipsum...</p>
//         </div>

//         <button className="accordion">Section 2</button>
//         <div className="panel">
//           <p>Lorem ipsum...</p>
//         </div>

//         <button className="accordion">Section 3</button>
//         <div className="panel">
//           <p>Lorem ipsum...</p>
//         </div>
//     </div>
//     )
// }