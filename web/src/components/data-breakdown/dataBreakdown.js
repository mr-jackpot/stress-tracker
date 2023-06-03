import React from "react";
import "./dataBreakdown.css";
import TagIcon from "../tag-icon/tagIcon";

const transformScore = (score) => {
  return score.charAt(0).toUpperCase() + score.slice(1).toLowerCase();
};

const DataBreakdown = (props) => {
  return (
    <div className={`data-breakdown ${props.theme}`}>
      {props.summaryData.loaded ? (
        <div className="message-container">
          <div className="title">
            Summary for {props.summaryData.month}{", "}
            {props.summaryData.week}:
          </div>
          <div className="score-message">{transformScore(props.summaryData.score)}</div>
          <div className="title">Themes for week</div>
          <div className="tag-container">
            <TagIcon feeling="shit" noclick/>
          </div>
        </div>
      ) : (
        <div className="holding-message">
          Please select a month to view data breakdown...
        </div>
      )}
    </div>
  );
};

export default DataBreakdown;
