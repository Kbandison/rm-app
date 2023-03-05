import React from "react";
import "./pageButton.css";

const PageButton = (props) => {
  return (
    <div className="page-button-section">
      {props.count !== 1 && (
        <button onClick={props.prevPage} className="page-button">
          Prev
        </button>
      )}
      {props.count !== props.end && (
        <button onClick={props.nextPage} className="page-button">
          Next
        </button>
      )}
    </div>
  );
};

export default PageButton;
