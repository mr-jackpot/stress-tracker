import React from "react";
import "./dataInput.css";

const DataInput = (props) => {
  return (
    <div className={`data-input-container ${props.theme}`}>
      <div className={`data-input-item heading`}>
        {" "}
        It's time to enter your mood for the week . . .{" "}
      </div>
      <div className={`data-input-item score`}>
        How do you feel?
        <div className="traffic-light-container">
          <div className="traffic-light-box green"></div>
          <div className="traffic-light-box amber"></div>
          <div className="traffic-light-box red"></div>
        </div>
        <div className={`submit-button`}>Submit</div>
      </div>
      <div className={`data-input-item feelings blur`}>Add some feelings . . .</div>
      <div className={`data-input-item notes blur`}>
        Would you like to add some custom notes?
      </div>
      <div className={`data-input-item submit blur`}>Summary & submit</div>
    </div>
  );
};

export default DataInput;
