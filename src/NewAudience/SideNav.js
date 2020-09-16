import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const SideNav = ({ segments, segment, setSegment, country, setCountry }) => {
  const countries = ['UnitedStates', 'Canada', 'Spain', 'India', 'Brazil'];

  const changeCountry = (e) => {
    if (e.target.tagName.toLowerCase() === 'a') {
      setCountry(e.target.innerHTML);
    }
  }

  const changeSegment = (e) => {
    setSegment(e.target.innerHTML);
  }
  return (
    <>
      <div>
        <label htmlFor="country-dropdown">Audience Country</label>
        <DropdownButton id="country-dropdown" title={country} onClick={changeCountry}>
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