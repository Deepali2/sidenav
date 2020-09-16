import React from "react";

import { segments } from './data';

const SideNav = props => {
  return (
      <>        
        {segments.map((segment, index) => (           
          <div key={index}>{segment}</div>           
        ))}
      </>
  );
};

export default SideNav