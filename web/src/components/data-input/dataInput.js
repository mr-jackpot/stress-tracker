import React from "react";
import TagIcon from "../tag-icon/tagIcon";
import "./dataInput.css";

const DataInput = (props) => {
  const [blur, setBlur] = React.useState(["", "", "", ""]);

  return (
    <div className={`data-input-container ${props.theme}`}>
      <div className={`data-input-item heading`}>
        {" "}
        It's time to enter your mood for the week . . .{" "}
      </div>
      <div className={`data-input-item score ${blur[0]}`}>
        <div>How do you feel?</div>
        <div className="traffic-light-container">
          <div className="traffic-light-box green"></div>
          <div className="traffic-light-box amber"></div>
          <div className="traffic-light-box red"></div>
        </div>
        <div className={`submit-button`}>Submit</div>
      </div>
      <div className={`data-input-item feelings ${blur[1]}`}>
        <div> Add some feelings . . . </div>
        <div className="feelings-container">
          <TagIcon feeling="Shite" />
          <TagIcon feeling="Alright" />
          <TagIcon feeling="Flying" />
          <TagIcon feeling="Bullish" />
        </div>
        <div className={`submit-button`}>Submit</div>
      </div>
      <div className={`data-input-item notes ${blur[2]}`}>
        Would you like to add some custom notes?
      </div>
      <div className={`data-input-item submit ${blur[3]}`}>
        Summary & submit
      </div>
    </div>
  );
};

export default DataInput;
