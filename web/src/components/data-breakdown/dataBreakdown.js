import React from "react";
import "./dataBreakdown.css";

class DataBreakdown extends React.Component {

  render() {
    return (
      <div className="data-breakdown">
        <p>{this.props.summaryData}</p>
      </div>
    );
  }
}

export default DataBreakdown;
