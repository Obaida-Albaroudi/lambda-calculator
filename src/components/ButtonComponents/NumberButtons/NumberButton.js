import React from "react";

const NumberButton = ({num}) => {
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{num}</button>
    </div>
  );
};

export default NumberButton;
