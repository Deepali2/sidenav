import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { countries, segments } from './data';

import SideNav from './SideNav';
import DetailsColumn from './DetailsColumn';
import './NewAudience.css';

const NewAudience = props => {
  const [country, setCountry] = useState(countries[0]);
  const [segment, setSegment] = useState(segments[0]);
  return (
    <>
      <Table className="new-audience-table">
        <tbody>
          <tr>
            <td className="side-nav"><SideNav segments={segments} segment={segment} country={country} setCountry={setCountry} setSegment={setSegment} /></td>
            <td className="details"><DetailsColumn segment={segment} /></td>
          </tr>
        </tbody>
      </Table>
    </>
  )
};

export default NewAudience;