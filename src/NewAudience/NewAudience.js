import React from "react";
import { Table } from "react-bootstrap";

import SideNav from './SideNav';
import './NewAudience.css';

const NewAudience = props => {
  return (
    <>
      <Table className="new-audience-table">
        <tbody>
          <tr>
            <td className="side-nav"><SideNav /></td>
            <td className="details">Details Column</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
};

export default NewAudience;