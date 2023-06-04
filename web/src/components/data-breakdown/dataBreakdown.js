import React from "react";
import "./dataBreakdown.css";
import TagIcon from "../tag-icon/tagIcon";

const transformScore = (score) => {
  return score.charAt(0).toUpperCase() + score.slice(1).toLowerCase();
};

const returnTagList = (score) => {
  if (score === "good") {
    return (
        <div className={"tag-container"}>
          <TagIcon feeling="friends" noclick/>
          <TagIcon feeling="relationships" noclick/>
          <TagIcon feeling="learning" noclick/>
          <TagIcon feeling="motivation" noclick/>
          <TagIcon feeling="bullish" noclick/>
          <TagIcon feeling="future" noclick/>
          <TagIcon feeling="work" noclick />
        </div>
    )
  } else if (score === "fair") {
    return (
        <div className={"tag-container"}>
          <TagIcon feeling="stressed" noclick/>
          <TagIcon feeling="motviation" noclick/>
          <TagIcon feeling="friends" noclick/>
          <TagIcon feeling="acheivements" noclick/>
          <TagIcon feeling="learning" noclick/>
        </div>
    )
  } else {
    return (
        <div className={"tag-container"}>
          <TagIcon feeling="stressed" noclick/>
          <TagIcon feeling="negative" noclick/>
          <TagIcon feeling="bearish" noclick/>
          <TagIcon feeling="work" noclick/>
          <TagIcon feeling="relationships" noclick/>
          <TagIcon feeling="apathy" noclick/>
        </div>
    )
  }
}

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
            {returnTagList(props.summaryData.score.toLowerCase())}
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
