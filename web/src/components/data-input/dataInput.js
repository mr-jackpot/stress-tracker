import React from "react";
import TagIcon from "../tag-icon/tagIcon";
import "./dataInput.css";

const DataInput = (props) => {
  return (
    <div className={`data-input-container ${props.theme}`}>
      <div className={`data-input-item heading`}>
        {" "}
        It's time to enter your mood for the week . . .{" "}
      </div>
      <div className={`data-input-item score`}>
        <div>How do you feel?</div>
        <div className="traffic-light-container">
          <div className="traffic-light-box green"></div>
          <div className="traffic-light-box amber"></div>
          <div className="traffic-light-box red"></div>
        </div>
        <div className={`submit-button`}>Submit</div>
      </div>
      <div className={`data-input-item feelings`}>
        <div> Add some feelings . . . </div>
        <div className="feelings-container">
          <TagIcon feeling="Shite" />
          <TagIcon feeling="Alright" />
          <TagIcon feeling="Flying" />
          <TagIcon feeling="Bullish" />
          <TagIcon feeling="Stinker" />
          <TagIcon feeling="Mid" />
        </div>
        <div className={`submit-button`}>Submit</div>
      </div>
      <div className={`data-input-item notes`}>
        Would you like to add some custom notes?
        <textarea id="custom-notes-input" type="text" />
        <div className={`submit-button`}>Submit</div>
      </div>
      <div className={`data-input-item submit`}>Summary & submit</div>
    </div>
  );
};

export default DataInput;
