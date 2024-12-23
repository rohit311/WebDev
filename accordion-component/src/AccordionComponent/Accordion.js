import React, { useRef, useState } from 'react';
import data from "./AccordionData";
import { RiArrowDropDownLine } from 'react-icons/ri';


const AccordianItem = ({title, body, isOpen, onClick}) => {
  const contentHeight = useRef();

  return (
    <div className='wrapper'>
      <button className={`title-container ${isOpen ? 'active' : ''}`} onClick={onClick}>
        <p className='title-content'>{title}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? 'active' : ''}`} />
      </button>

      <div ref={contentHeight} className='body-container' style={
          isOpen
          ? { height: contentHeight.current.scrollHeight }
          : { height: "0px" }
         }>
          <p className="body-content">{body}</p>
         </div>
    </div>
  );
};

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
   setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
   <div className='container'>
     {data.map((item, index) => (
     <AccordianItem
      key={index}
      title={item.question}
      body={item.answer}
      isOpen={activeIndex === index}
      onClick={() => handleItemClick(index)}
     />
    ))}
   </div>
  )
 };


export default Accordian;