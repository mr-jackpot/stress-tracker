import React from "react";
import "./dataBreakdown.css";

class DataBreakdown extends React.Component {
  render() {
    return (  
      <div className={`data-breakdown ${this.props.summaryData.score}`}>
        {this.props.summaryData.loaded ?
          <div className="title">Your score for {this.props.summaryData.month} {this.props.summaryData.week}:   
            {"  "}{this.props.summaryData.score}</div> : 
          <div className="holding-message">Please select a month to view data breakdown.</div>
        }
        
      </div>
    );
  }
}

export default DataBreakdown;
