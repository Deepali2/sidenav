import React from "react";

const DetailsColumn = ({ segment }) => {
  return (
    <div>
      <div>
        {segment}
      </div>
      <div>Study Period</div>
      <div>ViewerShip Threshold</div>
      <div>Language</div>
      <div>Audience Details</div>
    </div>
  )
}

export default DetailsColumn;