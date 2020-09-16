import React from "react";

const SideNav = ({ segments, segment, setSegment }) => {
  const changeSegment = (e) => {
    setSegment(e.target.innerHTML);
  }
  return (
    <>
      <div>Countries Selection</div>
      <ul>
        {segments.map((element, index) => (
          <li key={index} onClick={changeSegment}>{element}</li>
        ))}
      </ul>      
    </>
  );
};

export default SideNav