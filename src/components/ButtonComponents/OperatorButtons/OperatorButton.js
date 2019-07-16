import React from "react";



const OperatorButton = ({operate}) => {
  console.log(operate)
  return (
    <div>
    {/* Display a button element rendering the data being passed down from the parent container on props */}
    <button>{operate.char}</button>
    {/* <button>{operate.value}</button> */}
    </div>
  );
};

export default OperatorButton;
