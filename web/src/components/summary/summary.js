import React from "react";
import DataBreakdown from "../data-breakdown/dataBreakdown";
import "./summary.css";

export default class Summary extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { summaryData: "Please select a week to view breakdown." };
  }

  handleClick(e) {
    this.setState({summaryData: e.target.className})
    console.log(e)
  }

  render() {
    return (
      <div className="content-container">
        <div className="summary-table">
          <table>
            <tr>
              <th className="table-corner"></th>
              <th>January</th>
              <th>February</th>
              <th>March</th>
              <th>April</th>
            </tr>
            <tr>
              <td className="week-heading">Week 1</td>
              <td onClick={this.handleClick.bind(this)} className="bad"></td>
              <td onClick={this.handleClick.bind(this)} className="fair"></td>
              <td onClick={this.handleClick.bind(this)} className="good"></td>
              <td onClick={this.handleClick.bind(this)} className="good"></td>
            </tr>
            <tr>
              <td
                onClick={this.handleClick.bind(this)}
                className="week-heading"
              >
                Week 2
              </td>
              <td onClick={this.handleClick.bind(this)} className="fair"></td>
              <td onClick={this.handleClick.bind(this)} className="fair"></td>
              <td onClick={this.handleClick.bind(this)} className="good"></td>
              <td onClick={this.handleClick.bind(this)} className="bad"></td>
            </tr>
            <tr>
              <td
                onClick={this.handleClick.bind(this)}
                className="week-heading"
              >
                Week 3
              </td>
              <td onClick={this.handleClick.bind(this)} className="bad"></td>
              <td onClick={this.handleClick.bind(this)} className="good"></td>
              <td onClick={this.handleClick.bind(this)} className="good"></td>
              <td onClick={this.handleClick.bind(this)} className="fair"></td>
            </tr>
            <tr>
              <td
                onClick={this.handleClick.bind(this)}
                className="week-heading"
              >
                Week 4
              </td>
              <td onClick={this.handleClick.bind(this)} className="bad"></td>
              <td onClick={this.handleClick.bind(this)} className="good"></td>
              <td onClick={this.handleClick.bind(this)} className="fair"></td>
              <td onClick={this.handleClick.bind(this)} className="good"></td>
            </tr>
          </table>
        </div>
        <DataBreakdown summaryData={this.state.summaryData} />
      </div>
    );
  }
}
