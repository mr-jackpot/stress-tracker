import React from "react";
import DataBreakdown from "../data-breakdown/dataBreakdown";
import "./summary.css";

const Summary = (props) => {
  const [summaryData, setSummaryData] = React.useState([
    {
      month: "a",
      week: "a",
      score: "a",
      loaded: false,
    },
  ]);

  const handleClick = (e) => {
    const cell = e.target;
    const header = cell.getAttribute("headers");
    const rowHeader =
      cell.parentNode.querySelector('th[scope="row"]').textContent;

    setSummaryData({
      score: cell.className,
      month: header,
      week: rowHeader,
      loaded: true,
    });
  };

  return (
    <div className="content-container">
      <div className="summary-table">
        <table>
          <tbody>
            <tr>
              <th className="table-corner"></th>
              <th scope="column" id="January">
                January
              </th>
              <th scope="column" id="February">
                February
              </th>
              <th scope="column" id="March">
                March
              </th>
              <th scope="column" id="April">
                April
              </th>
            </tr>
            <tr>
              <th scope="row">Week 1</th>
              <td headers="January" onClick={handleClick} className="bad"></td>
              <td headers="February" onClick={handleClick} className="fair"></td>
              <td headers="March" onClick={handleClick} className="good"></td>
              <td headers="April" onClick={handleClick} className="good"></td>
            </tr>
            <tr>
              <th scope="row">Week 2</th>
              <td headers="January" onClick={handleClick} className="fair"></td>
              <td headers="February" onClick={handleClick} className="fair"></td>
              <td headers="March" onClick={handleClick} className="good"></td>
              <td headers="April" onClick={handleClick} className="bad"></td>
            </tr>
            <tr>
              <th scope="row">Week 3</th>
              <td headers="January" onClick={handleClick} className="bad"></td>
              <td headers="February" onClick={handleClick} className="good"></td>
              <td headers="March" onClick={handleClick} className="good"></td>
              <td headers="April" onClick={handleClick} className="fair"></td>
            </tr>
            <tr>
              <th scope="row">Week 4</th>
              <td headers="January" onClick={handleClick} className="bad"></td>
              <td headers="February" onClick={handleClick} className="good"></td>
              <td headers="March" onClick={handleClick} className="fair"></td>
              <td headers="April" onClick={handleClick} className="good"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <DataBreakdown summaryData={summaryData} theme={props.theme} />
    </div>
  );
};

export default Summary;
