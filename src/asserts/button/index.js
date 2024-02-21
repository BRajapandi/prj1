import React from "react";
import "./button.css";
function CutButton(props) {
  return (
    <>
      <div className="cstbtn-holder">
        <button
          className="cstbtn cstbtn-1 hover-filled-slide-down"
          onClick={props.clickFunction}
        >
          <span>
            {props.children}&nbsp;<i className="bi bi-box-arrow-in-right"></i>
          </span>
        </button>
      </div>
    </>
  );
}

export default CutButton;
