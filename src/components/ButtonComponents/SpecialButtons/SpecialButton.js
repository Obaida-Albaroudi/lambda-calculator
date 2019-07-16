import React from "react";

const SpecialButton = ({specialChar}) => {
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{specialChar}</button>
    </div>
  );
};

export default SpecialButton;