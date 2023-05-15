import React from "react";
import "./dataBreakdown.css";

const DataBreakdown = (props) => {
  return (
    <div className={`data-breakdown ${props.theme}`}>
      {props.summaryData.loaded ? (
        <div className="title">
          Your score for {props.summaryData.month}{" "}
          {props.summaryData.week}:{"  "}
          {props.summaryData.score}
        </div>
      ) : (
        <div className="holding-message">
          Please select a month to view data breakdown.
        </div>
      )}
    </div>
  );
};

export default DataBreakdown;
