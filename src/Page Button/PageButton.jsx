import React from "react";
import "./pageButton.css";

const PageButton = (props) => {
  return (
    <div className="page-button-section">
      {props.count !== 1 && ( //IF THE COUNT IS NOT EQUAL TO 1, DISPLAY THE PREVIOUS BUTTON
        <button onClick={props.prevPage} className="page-button">
          Prev
        </button>
      )}
      {props.count !== props.end && ( //IF THE COUNT IS NOT EQUAL TO THE TOTAL NUMBER OF PAGES, DISPLAY THE NEXT BUTTON
        <button onClick={props.nextPage} className="page-button">
          Next
        </button>
      )}
    </div>
  );
};

export default PageButton;
