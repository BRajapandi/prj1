import React from 'react'
import './button.css'
function CutButton(props) {
  return (
    <>
      <div class="cstbtn-holder">
        <button class="cstbtn cstbtn-1 hover-filled-slide-down" onClick={props.clickFunction}>
          <span>{props.children}&nbsp;<i class="bi bi-box-arrow-in-right"></i></span>
        </button>
      </div>
    </>
  )
}

export default CutButton