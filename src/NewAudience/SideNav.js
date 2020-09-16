import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



const SideNav = ({ segments, segment, setSegment }) => {
  const countries = ['UnitedStates', 'Canada', 'Spain', 'India']
  const changeSegment = (e) => {
    setSegment(e.target.innerHTML);
  }
  return (
    <>
      <div>
        <label htmlFor="country-dropdown">Audience Country</label>
        <DropdownButton id="country-dropdown" title="Select">
          {countries.map((country, index) => (
            <Dropdown.Item href="#" key={index}>{country}</Dropdown.Item>
          ))}        
        </DropdownButton>
      </div>
      <ul>
        {segments.map((element, index) => (
          <li key={index} onClick={changeSegment}>{element}</li>
        ))}
      </ul>      
    </>
  );
};

export default SideNav