import React from "react";
import DataBreakdown from "../data-breakdown/dataBreakdown";
import "./summary.css";

export default class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summaryData: {
        loaded: false,
        score: "default score",
        week: "default week",
        month: "default month",
        holdingMessage: "Select a week to view breakdown.",
      },
    };
  }

  handleClick(e) {
    const cell = e.target;
    const header = cell.getAttribute("headers");
    const rowHeader = cell.parentNode.querySelector('th[scope="row"]').textContent;
    this.setState({
      summaryData: {
        loaded: true,
        score: cell.className,
        week: rowHeader,
        month: header
      },
    });
  }

  render() {
    return (
      <div className="content-container">
        <div className="summary-table">
          <table>
            <tr>
              <th className="table-corner"></th>
              <th scope='column' id="January">January</th>
              <th scope='column' id="February">February</th>
              <th scope='column' id="March">March</th>
              <th scope='column' id="April">April</th>
            </tr>
            <tr>
              <th scope='row'>Week 1</th>
              <td headers="January" onClick={this.handleClick.bind(this)} className="bad"></td>
              <td headers="February" onClick={this.handleClick.bind(this)} className="fair"></td>
              <td headers="March"  onClick={this.handleClick.bind(this)} className="good"></td>
              <td headers="April"  onClick={this.handleClick.bind(this)} className="good"></td>
            </tr>
            <tr>
              <th scope='row'>Week 2</th>
              <td headers="January" onClick={this.handleClick.bind(this)} className="fair"></td>
              <td headers="February"onClick={this.handleClick.bind(this)} className="fair"></td>
              <td headers="March"  onClick={this.handleClick.bind(this)} className="good"></td>
              <td headers="April"  onClick={this.handleClick.bind(this)} className="bad"></td>
            </tr>
            <tr>
              <th scope='row'>Week 3</th>
              <td headers="January" onClick={this.handleClick.bind(this)} className="bad"></td>
              <td headers="February"onClick={this.handleClick.bind(this)} className="good"></td>
              <td headers="March"  onClick={this.handleClick.bind(this)} className="good"></td>
              <td headers="April"  onClick={this.handleClick.bind(this)} className="fair"></td>
            </tr>
            <tr>
              <th scope='row'>Week 4</th>
              <td headers="January" onClick={this.handleClick.bind(this)} className="bad"></td>
              <td headers="February"onClick={this.handleClick.bind(this)} className="good"></td>
              <td headers="March"  onClick={this.handleClick.bind(this)} className="fair"></td>
              <td headers="April"  onClick={this.handleClick.bind(this)} className="good"></td>
            </tr>
          </table>
        </div>
        <DataBreakdown summaryData={this.state.summaryData} />
      </div>
    );
  }
}
