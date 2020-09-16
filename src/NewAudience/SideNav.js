import React from "react";

const SideNav = ({ segments, segment, setSegment }) => {
  const changeSegment = (e) => {
    setSegment(e.target.innerHTML);
  }
  return (
      <>        
        {segments.map((element, index) => (           
          <div key={index} onClick={changeSegment}>{element}</div>           
        ))}
      </>
  );
};

export default SideNav