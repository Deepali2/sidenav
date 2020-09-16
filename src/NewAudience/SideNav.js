import React from "react";
// import { Nav } from "react-bootstrap";
import { Table } from "react-bootstrap";

import { segments } from './data';

const SideNav = props => {
  return (
      <>
        <Table>
         {segments.map((segment, index) => (
           <tr>
             <a href="#" key={index}>{segment}</a>
           </tr>
         ))}
        </Table>
      </>
  );
};

export default SideNav